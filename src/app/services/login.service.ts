import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../models/user.model';

const { apiUsers, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Dependency Injection.
  constructor(private readonly http: HttpClient) { }

  // > Models, HttpClient, Observables, and RxJS operators.
  public login(username: string): Observable<User> {
    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if (user === undefined) { // user does not exist
            return this.createUser(username);
          }
          return of(user);
        })
      )
  }

  // Check if user exist
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        // RxJS Operators
        map((response: User[]) => response.pop())
      )
  }

  // If not user - create User
  private createUser(username: string): Observable<User> {
    
    const user = {
      username, 
      collected: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiUsers, user, {
      headers
    })

  }

  

}
