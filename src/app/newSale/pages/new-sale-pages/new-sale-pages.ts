import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewSaleTable, SaleItem } from '../../components/new-sale-table/new-sale-table';
import { NewSaleToolbar } from '../../components/new-sale-toolbar/new-sale-toolbar';
import { NewSaleSummary } from '../../components/new-sale-sumaryt/new-sale-sumaryt';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-new-sale-pages',
  standalone: true,
  imports: [
    CommonModule,
    NewSaleTable,
    NewSaleToolbar,
    NewSaleSummary,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './new-sale-pages.html',
  styleUrls: ['./new-sale-pages.css'],
})
export class NewSalePage {
  items: SaleItem[] = [
    { nombre: 'Laptop', cantidad: 1, precio: 15000 },
    { nombre: 'Mouse', cantidad: 2, precio: 300 },
    { nombre: 'Teclado', cantidad: 1, precio: 800 },
  ];

  efectivo: number = 0;
  private readonly TAX_RATE = 0.16; // 16% de impuestos

  constructor(private router: Router) {}

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.cantidad * item.precio, 0);
  }

  get impuestos(): number {
    return this.subtotal * this.TAX_RATE;
  }

  get total(): number {
    return this.subtotal + this.impuestos;
  }

  onSearch(value: string): void {
    console.log('Buscando:', value);
  }

  onScan(): void {
    console.log('Escaneando código...');
  }

  onItemsChange(updatedItems: SaleItem[]): void {
    this.items = updatedItems;
  }

  onEfectivoChange(value: number): void {
    this.efectivo = value;
    console.log('Efectivo actualizado:', this.efectivo);
  }

  onCancel(): void {
    console.log('Venta cancelada');
    this.items = [];
    this.efectivo = 0;
  }

  onConfirm(): void {
    console.log('Efectivo ingresado:', this.efectivo);
    console.log('Total a pagar:', this.total);

    if (this.efectivo < this.total) {
      alert(
        `El efectivo ingresado ($${this.efectivo.toFixed(2)}) es insuficiente. Total a pagar: $${this.total.toFixed(2)}`,
      );
      return;
    }

    const ticketData = {
      items: this.items,
      subtotal: this.subtotal,
      impuestos: this.impuestos,
      total: this.total,
      efectivo: this.efectivo,
      cambio: this.efectivo - this.total,
      fecha: new Date().toLocaleDateString('es-MX'),
      hora: new Date().toLocaleTimeString('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    console.log('Venta confirmada:', ticketData);

    this.router.navigate(['/ticket'], {
      state: { ticketData },
    });
  }
}
