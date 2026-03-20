import { Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

export interface Notification {
  id: number;
  tipo: 'stock' | 'venta' | 'compra' | 'usuario';
  titulo: string;
  descripcion: string;
  tiempo: string;
  leida: boolean;
}

@Component({
  selector: 'app-notifications-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications-dropdown.component.html',
  styleUrls: ['./notifications-dropdown.component.css'],
})
export class NotificationsDropdownComponent {
  isOpen = false;

  notifications: Notification[] = [
    {
      id: 1,
      tipo: 'stock',
      titulo: 'Stock bajo — Pepsi',
      descripcion: 'Quedan solo 8 unidades. Se recomienda reabastecer.',
      tiempo: 'Hace 5 min',
      leida: false,
    },
    {
      id: 2,
      tipo: 'venta',
      titulo: 'Nueva venta registrada',
      descripcion: 'Venta #00234 por MX$1,850.00 completada.',
      tiempo: 'Hace 18 min',
      leida: false,
    },
    {
      id: 3,
      tipo: 'compra',
      titulo: 'Compra recibida',
      descripcion: 'Pedido #0089 de Proveedor FUD ingresado al inventario.',
      tiempo: 'Hace 1 hora',
      leida: false,
    },
    {
      id: 4,
      tipo: 'usuario',
      titulo: 'Usuario agregado',
      descripcion: 'Carlos M. fue registrado como Empleado.',
      tiempo: 'Ayer',
      leida: true,
    },
  ];

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  get unreadCount(): number {
    return this.notifications.filter((n) => !n.leida).length;
  }

  get iconoClase(): string {
    // devuelve la clase CSS del ícono según tipo
    return '';
  }

  getIcono(tipo: string): string {
    const map: Record<string, string> = {
      stock: 'bx bx-error',
      venta: 'bx bx-receipt',
      compra: 'bx bx-package',
      usuario: 'bx bx-user',
    };
    return map[tipo] ?? 'bx bx-bell';
  }

  marcarTodasLeidas(): void {
    this.notifications = this.notifications.map((n) => ({ ...n, leida: true }));
  }

  marcarLeida(id: number): void {
    this.notifications = this.notifications.map((n) => (n.id === id ? { ...n, leida: true } : n));
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
