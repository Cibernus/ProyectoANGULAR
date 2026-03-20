import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-products-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-form.html',
  styleUrls: ['./products-form.css'],
})
export class ProductsForm {

  @Input() product: Product = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    imagenUrl: '',
    margen_ganancia: 0,
    precio_venta: 0,
    codigo_barras: '',
    tipo_producto: '',
    claveCategoria: '',
    claveUnidadMedida: '',
    claveUnidadVenta: '',
    claveProveedor: ''
  };

  @Input() mode: 'create' | 'edit' = 'create';
  @Input() visible = false;

  @Output() save = new EventEmitter<Product>();
  @Output() close = new EventEmitter<void>();

  showErrorModal = false; // 👈 para mostrar modal de error

  onSubmit() {
    if (
      !this.product.nombre ||
      !this.product.descripcion ||
      !this.product.precio ||
      !this.product.cantidad ||
      !this.product.margen_ganancia ||
      !this.product.precio_venta ||
      !this.product.codigo_barras ||
      !this.product.tipo_producto ||
      !this.product.claveCategoria ||
      !this.product.claveUnidadMedida ||
      !this.product.claveUnidadVenta ||
      !this.product.claveProveedor
    ) {
      this.showErrorModal = true; // activa modal de error
      return;
    }

    this.save.emit(this.product);
  }

  onClose() {
    this.close.emit();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.imagenUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
