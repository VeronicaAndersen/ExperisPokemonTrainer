import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { CatalogueService } from './catalogue.service';
import { UserService } from './user.service';

const { apiKey, apiUsers } = environment;

@Injectable({
  providedIn: 'root'
})
export class CollectedService {

  constructor(
    private http: HttpClient,
    private readonly catalogueService: CatalogueService, 
    private readonly userService: UserService,

  ) { }
  // Get the pokemon based on id

  // Patch request with the userId and the pokemon

  public addToCollected(pokemonId: number): Observable<User> {

    if (!this.userService.user) {
      throw new Error("addToCollected: There is no user!");

    }

    const user: User = this.userService.user;

    const pokemon: Pokemon | undefined = this.catalogueService.pokemonById(pokemonId);

    if (!pokemon) {
      throw new Error("addToCollected: No pokemon with id: " + pokemonId);
    }

    // Does pokemon exist in collected.
    if (this.userService.inCollected(pokemonId)) {
      this.userService.removeFromCollected(pokemonId);
    }else{
      this.userService.addToCollected(pokemon);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    })

    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      collected: [...user.collected] // Already updated.
    }, {
      headers
    })
    .pipe (
      tap((updatedUser: User) => {
        this.userService.user = updatedUser;
      })
    )
  }
}
