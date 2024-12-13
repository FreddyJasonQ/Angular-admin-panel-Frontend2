// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin@gmail.com:123')
    });
    return this.http.get(`${this.apiUrl}/orders`, { headers });
  }

  getCustomers(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:admin')
    });
    return this.http.get(`${this.apiUrl}/customers`, { headers });
  }
}
