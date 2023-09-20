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

  findAll(): Observable<cycle[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<cycle[]>('http://localhost:8080/api/cycle/list',
    {headers: headers});
  }

  addToCart(username: any, cycleId: number, count: number): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post<string>("http://localhost:8080/api/addToCart", 
    {username: username, cycleId: cycleId, count: count},
    {headers: headers});
  }

  getCart(username: any): Observable<CartItem[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<CartItem[]>(`http://localhost:8080/api/getCart/${username}`,
    {headers: headers});
  }

  getAllBorrowed(username: any): Observable<BorrowedItem[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<BorrowedItem[]>(`http://localhost:8080/api/getAllBorrowed/${username}`,
    {headers: headers});
  }

  checkout(username: any): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post<string>("http://localhost:8080/api/checkout",
    {username: username}, {headers: headers});
  }

}
