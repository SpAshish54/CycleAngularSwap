import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cycle } from './cycle';
import { CartItem } from './CartItem';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<cycle[]> {
    return this.http.get<cycle[]>('http://localhost:8080/api/cycle/list');
  }

  addToCart(userId: number, cycleId: number, count: number): Observable<string> {
    return this.http.post<string>("http://localhost:8080/api/addToCart", 
    {userId: userId, cycleId: cycleId, count: count});
  }

  getCart(userId: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`http://localhost:8080/api/getCart/${userId}`);
  }

  checkout(userId: number): Observable<string> {
    return this.http.post<string>("http://localhost:8080/api/checkout",
    {userId: userId});
  }

}
