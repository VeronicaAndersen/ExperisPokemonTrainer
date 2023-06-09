import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Pokemon, PokemonData } from '../models/pokemon.model';

const { apiPokemons } = environment;

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private _pokemonsData: Pokemon[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get pokemons(): Pokemon[] {
    return this._pokemonsData;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllPokemons(): void {

    if (this._pokemonsData.length > 0 || this.loading) {
      return;
    }

    this._loading = true; // Sets the loading variable to true.
    this.http.get<PokemonData>(apiPokemons)
      .pipe(
        finalize(() => {
          this._loading = false; // Sets the loading variable to false.
        })
      )
      .subscribe({
        next: (pokemonData: PokemonData) => {
          // Gets pokemonData that contains the pokemon results and adds it to Pokemon array.
          const pokemons: Pokemon[] = pokemonData.results;
          this._pokemonsData = pokemons;

          // Iterates through the pokemons and splits url to the specific pokemon id.
          for (let i = 0; i < pokemons.length; i++) {
            let imgArray = pokemons[i].url.split("/");
            let id = imgArray[imgArray.length-2];
            pokemons[i].id = parseInt(id);
          }
        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      })

  }

  public pokemonById(id: number): Pokemon | undefined {
    return this._pokemonsData.find((pokemon: Pokemon) => pokemon.id === id);
  } 

}
