import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  
  constructor(private http: HttpClient) {}

  listAvailableCycles(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/cycle/list`);
  }

  borrowCycle(id: number, count: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/${id}/borrow?count=${count}`);
  }

  returnCycle(id: number, count: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/${id}/return?count=${count}`);
  }

  restockCycle(id: number, count: number): Observable<any> {
    return this.http.post(`http://localhost:8080/api/${id}/restock?count=${count}`, null);
  }
}
 