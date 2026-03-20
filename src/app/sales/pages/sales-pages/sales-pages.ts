import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SalesToolbar } from '../../components/sales-toolbar/sales-toolbar';
import { SalesTable, Sale } from '../../components/sales-table/sales-table';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-sales-pages',
  standalone: true,
  imports: [
    CommonModule,
    SalesToolbar,
    SalesTable,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './sales-pages.html',
  styleUrls: ['./sales-pages.css'],
})
export class SalesPages {
  sales: Sale[] = [
    {
      numeroVenta: 'VEN-0001',
      fecha: '2024-10-01 14:30:00',
      total: 150.0,
      empleado: 'Juan Pérez',
    },
    {
      numeroVenta: 'VEN-0002',
      fecha: '2024-10-02 16:15:00',
      total: 120.0,
      empleado: 'Ana González',
    },
    {
      numeroVenta: 'VEN-0003',
      fecha: '2024-10-03 12:45:00',
      total: 180.0,
      empleado: 'Juan Pérez',
    },
  ];

  filteredSales: Sale[] = [...this.sales];

  constructor(private router: Router) {}

  onSearch(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredSales = [...this.sales];
      return;
    }

    const term = searchTerm.toLowerCase();
    this.filteredSales = this.sales.filter(
      (sale) =>
        sale.numeroVenta.toLowerCase().includes(term) ||
        sale.fecha.toLowerCase().includes(term) ||
        sale.empleado.toLowerCase().includes(term) ||
        sale.total.toString().includes(term),
    );
  }

  onNuevaVenta(): void {
    this.router.navigate(['/nueva-venta']);
  }

  onImprimir(sale: Sale): void {
    console.log('Imprimir venta:', sale);
    // Aquí puedes implementar la lógica para imprimir el ticket
    // Por ejemplo, navegar al ticket con los datos de la venta
    // o abrir una ventana de impresión
    alert(`Imprimiendo ticket de venta: ${sale.numeroVenta}`);
  }
}
