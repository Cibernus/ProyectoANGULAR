import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ importar CommonModule
import { NotificationsDropdownComponent } from '../../components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../components/user-dropdown/user-dropdown.component';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';
import { SalesChartComponent } from '../../components/sales-chart/sales-chart.component';
import { ProductPercentageChartComponent } from '../../components/product-percentage-chart/product-percentage-chart.component';
import { MonthlySalesChartComponent } from '../../components/monthly-sales-chart/monthly-sales-chart.component';
import { ProductTableComponent } from '../../components/product-table/product-table.component';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NotificationsDropdownComponent,
    UserDropdownComponent,
    DashboardCardComponent,
    SalesChartComponent,
    ProductPercentageChartComponent,
    MonthlySalesChartComponent,
    ProductTableComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent {
  // Tarjetas del dashboard

  cards = [
    { title: 'Ventas del día', value: '$1,500.00', percentage: 11.02, trend: 'up' },
    { title: 'Stock Bajo', value: '15 Productos', percentage: -8.5, trend: 'down' },
    { title: 'Nuevos Proveedores', value: '1 Nuevo', percentage: 5.0, trend: 'up' },
    { title: 'Empleados Activos', value: '1 Empleado', percentage: 100.0, trend: 'up' },
  ];

  // Ventas diarias (para SalesChart)
  dailySales = [
    { day: 'Lun', value: 120 },
    { day: 'Mar', value: 150 },
    { day: 'Mié', value: 180 },
    { day: 'Jue', value: 200 },
    { day: 'Vie', value: 170 },
    { day: 'Sáb', value: 220 },
    { day: 'Dom', value: 90 },
  ];

  // Porcentaje de ventas por producto
  productPercentage = [
    { name: 'Arroz', value: 40 },
    { name: 'Aceite', value: 25 },
    { name: 'Azucar', value: 20 },
    { name: 'Harina', value: 15 },
    { name: 'Otros', value: 0 },
  ];

  // Ventas mensuales
  monthlySales = [
    { month: 'Ene', value: 1200 },
    { month: 'Feb', value: 1500 },
    { month: 'Mar', value: 1800 },
    { month: 'Abr', value: 2000 },
    { month: 'May', value: 1700 },
    { month: 'Jun', value: 2200 },
    { month: 'Jul', value: 1900 },
    { month: 'Agos', value: 2100 },
    { month: 'Sep', value: 2300 },
    { month: 'Oct', value: 2500 },
    { month: 'Nov', value: 2700 },
    { month: 'Dic', value: 3000 },
  ];

  // Tabla de productos
  products = [
    { name: 'Arroz', units: 120 },
    { name: 'Aceite', units: 95 },
    { name: 'Azúcar', units: 75 },
    { name: 'Harina', units: 60 },
    { name: 'Mayonesa', units: 40 },
  ];
}
