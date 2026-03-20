import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DetalleEntrega {
  claveentrega: string;
  claveproveedor: string;
  claveproducto: string;
  clavecompra: string;
  claveunidadcompra: string;
  cantidad: number;
  preciounitario: number;
  subtotal: number;
  observaciones?: string;
  tipo_detalle: 'Pedido' | 'PromocionPagada' | 'PromocionRegalada';
  extra: boolean;
}

export interface Delivery {
  claveentrega?: string;
  fecha_entrega: string;
  estado: string;
  total: number;
  descripcion: string;
  tipo_entrea: string;
  clavepedido: string;
  detalles?: DetalleEntrega[]; // opcional, se popula al abrir el modal
}

@Component({
  selector: 'app-deliveries-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries-table.html',
  styleUrl: './deliveries-table.css',
})
export class DeliveriesTable {

  @Input() deliveries: Delivery[] = [];

  @Output() edit = new EventEmitter<Delivery>();
  @Output() delete = new EventEmitter<Delivery>();

  isDetailOpen = false;
  selectedDeliveryDetail: Delivery | null = null;

  onEdit(delivery: Delivery) {
    this.edit.emit(delivery);
  }

  onDelete(delivery: Delivery) {
    this.delete.emit(delivery);
  }

  onViewDetail(delivery: Delivery) {
    this.selectedDeliveryDetail = delivery;
    this.isDetailOpen = true;
  }

  closeDetail() {
    this.isDetailOpen = false;
    this.selectedDeliveryDetail = null;
  }

  getBadgeClass(tipo: string): string {
    switch (tipo) {
      case 'Pedido':            return 'badge-pedido';
      case 'PromocionPagada':   return 'badge-pagada';
      case 'PromocionRegalada': return 'badge-regalada';
      default:                  return '';
    }
  }

}