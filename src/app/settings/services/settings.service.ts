import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UnidadMedida } from '../models/unidad-medida.interface';
import { UnidadVenta } from '../models/unidad-venta.interface';
import { UnidadCompra } from '../models/unidad-compra.interface';
import { Categoria } from '../models/categoria.interface';
import { Impuesto } from '../models/impuesto.interface';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private apiUrl = 'http://localhost:3000/api'; // TODO: cambiar por tu URL real

  constructor(private http: HttpClient) {}

  // ── Unidades de medida ──────────────────────────────────────
  getUnidadesMedida(): Observable<UnidadMedida[]> {
    // TODO: return this.http.get<UnidadMedida[]>(`${this.apiUrl}/unidades-medida`);
    return of([
      {
        idUnidadMedida: 1,
        nombre: 'Kilogramo',
        abreviatura: 'kg',
        tipoStock: 'Peso',
        estado: true,
      },
      { idUnidadMedida: 2, nombre: 'Litro', abreviatura: 'L', tipoStock: 'Volumen', estado: true },
      { idUnidadMedida: 3, nombre: 'Pieza', abreviatura: 'pza', tipoStock: 'Unidad', estado: true },
    ]);
  }

  createUnidadMedida(data: Partial<UnidadMedida>): Observable<UnidadMedida> {
    // TODO: return this.http.post<UnidadMedida>(`${this.apiUrl}/unidades-medida`, data);
    return of({ idUnidadMedida: Date.now(), estado: true, ...data } as UnidadMedida);
  }

  updateUnidadMedida(id: number, data: Partial<UnidadMedida>): Observable<UnidadMedida> {
    // TODO: return this.http.put<UnidadMedida>(`${this.apiUrl}/unidades-medida/${id}`, data);
    return of(data as UnidadMedida);
  }

  deleteUnidadMedida(id: number): Observable<void> {
    // TODO: return this.http.delete<void>(`${this.apiUrl}/unidades-medida/${id}`);
    return of(void 0);
  }

  // ── Unidades de venta ───────────────────────────────────────
  getUnidadesVenta(): Observable<UnidadVenta[]> {
    // TODO: return this.http.get<UnidadVenta[]>(`${this.apiUrl}/unidades-venta`);
    return of([
      { idUnidadVenta: 1, nombre: 'Pieza', abreviatura: 'pza', tipoValor: 'Unidad', estado: true },
      { idUnidadVenta: 2, nombre: 'Caja', abreviatura: 'cja', tipoValor: 'Paquete', estado: true },
      {
        idUnidadVenta: 3,
        nombre: 'Paquete',
        abreviatura: 'pqt',
        tipoValor: 'Paquete',
        estado: true,
      },
    ]);
  }

  createUnidadVenta(data: Partial<UnidadVenta>): Observable<UnidadVenta> {
    // TODO: return this.http.post<UnidadVenta>(`${this.apiUrl}/unidades-venta`, data);
    return of({ idUnidadVenta: Date.now(), estado: true, ...data } as UnidadVenta);
  }

  updateUnidadVenta(id: number, data: Partial<UnidadVenta>): Observable<UnidadVenta> {
    // TODO: return this.http.put<UnidadVenta>(`${this.apiUrl}/unidades-venta/${id}`, data);
    return of(data as UnidadVenta);
  }

  deleteUnidadVenta(id: number): Observable<void> {
    // TODO: return this.http.delete<void>(`${this.apiUrl}/unidades-venta/${id}`);
    return of(void 0);
  }

  // ── Unidades de compra ──────────────────────────────────────
  getUnidadesCompra(): Observable<UnidadCompra[]> {
    // TODO: return this.http.get<UnidadCompra[]>(`${this.apiUrl}/unidades-compra`);
    return of([
      { idUnidadCompra: 1, nombre: 'Caja', abreviatura: 'cja', tipoStock: 'Paquete', estado: true },
      { idUnidadCompra: 2, nombre: 'Costal', abreviatura: 'cos', tipoStock: 'Peso', estado: true },
      { idUnidadCompra: 3, nombre: 'Pieza', abreviatura: 'pza', tipoStock: 'Unidad', estado: true },
    ]);
  }

  createUnidadCompra(data: Partial<UnidadCompra>): Observable<UnidadCompra> {
    // TODO: return this.http.post<UnidadCompra>(`${this.apiUrl}/unidades-compra`, data);
    return of({ idUnidadCompra: Date.now(), estado: true, ...data } as UnidadCompra);
  }

  updateUnidadCompra(id: number, data: Partial<UnidadCompra>): Observable<UnidadCompra> {
    // TODO: return this.http.put<UnidadCompra>(`${this.apiUrl}/unidades-compra/${id}`, data);
    return of(data as UnidadCompra);
  }

  deleteUnidadCompra(id: number): Observable<void> {
    // TODO: return this.http.delete<void>(`${this.apiUrl}/unidades-compra/${id}`);
    return of(void 0);
  }

  // ── Categorías ──────────────────────────────────────────────
  getCategorias(): Observable<Categoria[]> {
    // TODO: return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
    return of([
      { idCategoria: 1, nombre: 'Abarrotes', descripcion: 'Productos de despensa en general' },
      { idCategoria: 2, nombre: 'Bebidas', descripcion: 'Refrescos, aguas y jugos' },
      { idCategoria: 3, nombre: 'Limpieza', descripcion: 'Productos de limpieza del hogar' },
    ]);
  }

  createCategoria(data: Partial<Categoria>): Observable<Categoria> {
    // TODO: return this.http.post<Categoria>(`${this.apiUrl}/categorias`, data);
    return of({ idCategoria: Date.now(), ...data } as Categoria);
  }

  updateCategoria(id: number, data: Partial<Categoria>): Observable<Categoria> {
    // TODO: return this.http.put<Categoria>(`${this.apiUrl}/categorias/${id}`, data);
    return of(data as Categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    // TODO: return this.http.delete<void>(`${this.apiUrl}/categorias/${id}`);
    return of(void 0);
  }

  // ── Impuestos ───────────────────────────────────────────────
  getImpuesto(): Observable<Impuesto> {
    // TODO: return this.http.get<Impuesto>(`${this.apiUrl}/impuestos`);
    return of({ porcentaje: 16 });
  }

  updateImpuesto(data: Impuesto): Observable<Impuesto> {
    // TODO: return this.http.put<Impuesto>(`${this.apiUrl}/impuestos`, data);
    return of(data);
  }
}
