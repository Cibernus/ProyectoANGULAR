import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Sale {
  numeroVenta: string;
  fecha: string;
  total: number;
  empleado: string;
}

@Component({
  selector: 'app-sales-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-table.html',
  styleUrl: './sales-table.css',
})
export class SalesTable {
  @Input() sales: Sale[] = [];
  @Output() imprimir = new EventEmitter<Sale>();

  onImprimir(sale: Sale): void {
    this.imprimir.emit(sale);
  }
}