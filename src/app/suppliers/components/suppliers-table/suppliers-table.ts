import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Supplier {
  id?: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  rfc: string;
}

@Component({
  selector: 'app-suppliers-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-table.html',
  styleUrl: './suppliers-table.css',
})
export class SuppliersTable {

  @Input() suppliers: Supplier[] = [];

  @Output() edit = new EventEmitter<Supplier>();
  @Output() delete = new EventEmitter<Supplier>();

  onEdit(proveedor: Supplier) {
    this.edit.emit(proveedor);
  }

  onDelete(proveedor: Supplier) {
    this.delete.emit(proveedor);
  }
}