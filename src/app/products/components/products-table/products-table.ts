import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  claveProducto?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  imagenUrl?: string;
  margen_ganancia: number;
  precio_venta: number;
  codigo_barras: string;
  tipo_producto: string;
  claveCategoria: string;
  claveUnidadMedida: string;
  claveUnidadVenta: string;
  claveProveedor: string;
}

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.html',
  styleUrls: ['./products-table.css'],
})
export class ProductsTable {

  @Input() products: Product[] = [];

  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();

  onEdit(producto: Product) {
    this.edit.emit(producto);
  }

  onDelete(producto: Product) {
    this.delete.emit(producto);
  }
}
