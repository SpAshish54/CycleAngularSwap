import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cycle } from './cycle';
import { CartItem } from './CartItem';
import { BorrowedItem } from './BorrowedItem';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(private http: HttpClient) { }

  getHeader(): HttpHeaders {
    if (localStorage.getItem('token')) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      });
      return headers;
    }
    return new HttpHeaders({});
  }

  findAll(): Observable<cycle[]> {
    return this.http.get<cycle[]>('http://localhost:8080/api/cycle/list',
      { headers: this.getHeader() });
  }

  addToCart(username: any, cycleId: number, count: number): Observable<string> {
    return this.http.post<string>("http://localhost:8080/api/addToCart",
      { username: username, cycleId: cycleId, count: count },
      { headers: this.getHeader() });
  }

  getCart(username: any): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`http://localhost:8080/api/getCart/${username}`,
      { headers: this.getHeader() });
  }

  getAllBorrowed(username: any): Observable<BorrowedItem[]> {
    return this.http.get<BorrowedItem[]>(`http://localhost:8080/api/getAllBorrowed/${username}`,
      { headers: this.getHeader() });
  }

  checkout(username: any): Observable<string> {
    return this.http.post<string>("http://localhost:8080/api/checkout",
      { username: username }, { headers: this.getHeader() });
  }

}
