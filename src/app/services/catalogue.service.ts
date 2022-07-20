import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon.model';

const { apiPokemons } = environment;

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private _pokemons: Pokemon[] = [];
  private _error: string = "";

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllPokemons(): void {
    this.http.get<Pokemon[]>(apiPokemons)
    .subscribe( {
      next: (pokemons: Pokemon[]) => {
        this._pokemons = pokemons;
      },
      error: (error: HttpErrorResponse) =>{
        this._error = error.message;
      }
    })
  }
}
