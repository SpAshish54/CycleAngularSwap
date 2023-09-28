import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  authUrl = 'http://localhost:8080/api';

  login(username: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/auth/token`, { username: username, password: password }).pipe(
      tap(res => {
        localStorage.setItem('token', res["token"]);
        localStorage.setItem('username', res["username"]);
      })
    );
  }

  register(username: any, password: any): Observable<any> {
    console.log("Registering");
    return this.http.post<any>(`${this.authUrl}/register`, {name: username, password: password, role: "USER"}).pipe(
      tap(res => {
        this.login(username, password).subscribe(res => {
          console.log(res);
        });
      })
    )
  }

}
