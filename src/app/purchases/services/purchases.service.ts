import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/purchases.model';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  private apiUrl = 'http://localhost:3000/api/compras'; // Cambia por tu URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.apiUrl);
  }

  getById(id: string): Observable<Compra> {
    return this.http.get<Compra>(`${this.apiUrl}/${id}`);
  }

  create(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.apiUrl, compra);
  }

  update(id: string, compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.apiUrl}/${id}`, compra);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
