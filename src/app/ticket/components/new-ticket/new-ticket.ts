import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SaleItem {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  @Input() items: SaleItem[] = [];
  @Input() subtotal: number = 0;
  @Input() impuestos: number = 0;
  @Input() total: number = 0;
  @Input() efectivo: number = 0;
  @Input() cambio: number = 0;
  @Input() fecha: string = '';
  @Input() hora: string = '';

  @Output() imprimir = new EventEmitter<void>();
  @Output() nuevaVenta = new EventEmitter<void>();

  onImprimir(): void {
    this.imprimir.emit();
  }

  onNuevaVenta(): void {
    this.nuevaVenta.emit();
  }
}