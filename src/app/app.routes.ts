import { Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/pages/dashboard-page/dashboard-page.component';
import { LoginPage } from './login/pages/login-page/login-page';
import { UsersPage } from './users/pages/users-page/users-page';
import { EmployeesPage } from './employees/pages/employees-page/employees-page';
import { ProductsPages } from './products/pages/products-pages/products-pages';
import { NewSalePage } from './newSale/pages/new-sale-pages/new-sale-pages';
import { TicketPages } from './ticket/pages/ticket-pages/ticket-pages';
import { SalesPages } from './sales/pages/sales-pages/sales-pages';
import { SuppliersPages } from './suppliers/pages/suppliers-pages/suppliers-pages';
import { ReporteStockPage2 } from './reportes2/pages/reporte-stock/reporte-stock';
import { EntradasSalidasPage2 } from './reportes2/pages/entradas-salidas/entradas-salidas';
import { InventarioGananciasPage2 } from './reportes2/pages/inventario-ganancias/inventario-ganancias';
import { PurchasesPage } from './purchases/pages/purchases-page/purchases-page';
import { ProfilePage } from './profile/pages/profile-page/profile-page';
import { SettingsPage } from './settings/pages/settings-page/settings-page';
import { DeliveriesPage } from './deliveries/pages/deliveries-page/deliveries-page';
import { OrdersPage } from './orders/pages/orders-page/orders-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'usuarios', component: UsersPage },
  { path: 'empleados', component: EmployeesPage },
  { path: 'productos', component: ProductsPages },
  { path: 'nueva-venta', component: NewSalePage },
  { path: 'ticket', component: TicketPages },
  { path: 'ventas', component: SalesPages },
  { path: 'proveedores', component: SuppliersPages },
  { path: 'perfil', component: ProfilePage },
  { path: 'configuracion', component: SettingsPage },

  // Rutas de reportes
  { path: 'reportes2/stock', component: ReporteStockPage2 },
  { path: 'reportes2/entradas-salidas', component: EntradasSalidasPage2 },
  { path: 'reportes2/inventario', component: InventarioGananciasPage2 },

  // Redirección por defecto a stock
  { path: 'reportes', redirectTo: 'reportes2/stock', pathMatch: 'full' },

  { path: 'compras', component: PurchasesPage },
  { path: 'entregas', component: DeliveriesPage },
  { path: 'pedidos', component: OrdersPage },
];
