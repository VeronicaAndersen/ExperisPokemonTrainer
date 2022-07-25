import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User; 

  // Collects the user.
  get user(): User | undefined {
    return this._user; 
  }

  // Save the user to localStorage.
  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user
  }

  // Removes user from localStorage.
  set userLogout(user: User | undefined) {
    StorageUtil.storageDelete<User>(StorageKeys.User);
    this._user = user
  }

  // Reading the user from localStorage.
  constructor() {
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  // Checks if pokemonId already is collected.
  public inCollected(pokemonId: number): boolean {
    if (this._user) {
      return Boolean(this.user?.collected.find((pokemon: Pokemon) => pokemon.id === pokemonId)); 
    }
    return false; 
  }

  // Adds pokemon to the users collected array.
  public addToCollected(pokemon: Pokemon): void {
    if (this._user) {
      this._user.collected.push(pokemon);
    }
  }

  // Removes pokemon from the users collected array.
  public removeFromCollected(pokemonId: number): void {
    if (this._user) {
      this._user.collected = this._user.collected.filter((pokemon: Pokemon) => pokemon.id !== pokemonId);
    }
  }
}
