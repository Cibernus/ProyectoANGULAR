import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../components/products-form/products-form';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API_URL = 'http://localhost:5027/api/Producto';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  // Crear producto
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  // Actualizar producto
  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${product.claveProducto}`, product);
  }

  // Eliminar producto
  delete(claveProducto: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${claveProducto}`);
  }
}
