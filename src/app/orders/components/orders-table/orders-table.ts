import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DetallePedido {
  clavepedido: string;
  claveproducto: string;
  cantidad: number;
  descripcion?: string;
  tipo_detalle: 'Pedido' | 'PromocionPagada' | 'PromocionRegalada';
}

export interface Order {
  clavepedido?: string;
  fechapedido: string;
  estado: string;
  observaciones: string;
  claveempleado: string;
  tipopedido: string;
  claveproveedor: string;
  total: number;
  detalles?: DetallePedido[]; // <-- campo opcional para los detalles
}

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-table.html',
  styleUrl: './orders-table.css',
})
export class OrdersTable {

  @Input() orders: Order[] = [];

  @Output() edit = new EventEmitter<Order>();
  @Output() delete = new EventEmitter<Order>();

  isDetailOpen = false;
  selectedOrderDetail: Order | null = null;

  onEdit(order: Order) {
    this.edit.emit(order);
  }

  onDelete(order: Order) {
    this.delete.emit(order);
  }

  onViewDetail(order: Order) {
    this.selectedOrderDetail = order;
    this.isDetailOpen = true;
  }

  closeDetail() {
    this.isDetailOpen = false;
    this.selectedOrderDetail = null;
  }

  getBadgeClass(tipo: string): string {
    switch (tipo) {
      case 'Pedido':           return 'badge-pedido';
      case 'PromocionPagada':  return 'badge-pagada';
      case 'PromocionRegalada':return 'badge-regalada';
      default:                 return '';
    }
  }

}