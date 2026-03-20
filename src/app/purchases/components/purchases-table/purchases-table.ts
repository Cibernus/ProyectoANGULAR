import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compra } from '../../models/purchases.model';

@Component({
  standalone: true,
  selector: 'app-compras-table',
  imports: [CommonModule],
  templateUrl: './purchases-table.html',
  styleUrl: './purchases-table.css',
})
export class ComprasTable {
  @Input() compras: Compra[] = [];
  @Output() edit = new EventEmitter<Compra>();
  @Output() delete = new EventEmitter<Compra>();

  onEdit(compra: Compra) {
    this.edit.emit(compra);
  }

  onDelete(compra: Compra) {
    this.delete.emit(compra);
  }

  getBadgeClass(estado: string): string {
    switch (estado) {
      case 'completada':
        return 'badge-completada';
      case 'pendiente':
        return 'badge-pendiente';
      case 'cancelada':
        return 'badge-cancelada';
      default:
        return '';
    }
  }

  getTipoBadgeClass(tipo: string): string {
    return tipo === 'pedido' ? 'badge-pedido' : 'badge-directa';
  }
}
