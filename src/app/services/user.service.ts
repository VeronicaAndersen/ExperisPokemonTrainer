import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // _user?: User is eqvualent to _user: User | undefined 
  private _user?: User; 

  get user(): User | undefined {
    return this._user; 
  }

  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user
  }

  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  public inCollected(pokemonId: number): boolean {
    if (this._user) {
      return Boolean(this.user?.collected.find((pokemon: Pokemon) => pokemon.id === pokemonId)); 
    }

    return false; 
  }

  public addToCollected(pokemon: Pokemon): void {
    if (this._user) {
      this._user.collected.push(pokemon);
    }
  }

  public removeFromCollected(pokemonId: number): void {
    if (this._user) {
      this._user.collected = this._user.collected.filter((pokemon: Pokemon) => pokemon.id !== pokemonId);
    }
  }
}
