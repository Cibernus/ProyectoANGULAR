import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para *ngFor
import { RouterModule } from '@angular/router'; // para routerLink

@Component({
  selector: 'app-navbar',
  standalone: true, // <- lo marcas standalone
  imports: [CommonModule, RouterModule], // <- directivas que usas
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuItems = [
    { path: '/dashboard', icon: 'bx bx-home', label: 'Dashboard' },
    { path: '/nueva-venta', icon: 'bx bx-cart-add', label: 'Nueva venta' },
    { path: '/ventas', icon: 'bx bx-cart', label: 'Ventas' },
    { path: '/compras', icon: 'bx bx-purchase-tag', label: 'Compras' },
    { path: '/pedidos', icon: 'bx bx-cart', label: 'Pedidos' },
    { path: '/entregas', icon: 'bx bx-package', label: 'Entregas' },
    { path: '/productos', icon: 'bx bx-box', label: 'Productos' },
    { path: '/proveedores', icon: 'bx bx-user', label: 'Proveedores' },
    { path: '/empleados', icon: 'bx bx-user', label: 'Empleados' },
    { path: '/reportes2/stock', icon: 'bx bx-package', label: 'Reportes' },
    { path: '/usuarios', icon: 'bx bx-group', label: 'Usuarios' },
  ];
}
