import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { TicketToolbar } from '../../components/ticket-toolbar/ticket-toolbar';
import { NewTicket } from '../../components/new-ticket/new-ticket';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

interface TicketData {
  items: any[];
  subtotal: number;
  impuestos: number;
  total: number;
  efectivo: number;
  cambio: number;
  fecha: string;
  hora: string;
}

@Component({
  selector: 'app-ticket-pages',
  standalone: true,
  imports: [
    CommonModule,
    TicketToolbar,
    NewTicket,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './ticket-pages.html',
  styleUrls: ['./ticket-pages.css'],
})
export class TicketPages implements OnInit {
  ticketData: TicketData = {
    items: [],
    subtotal: 0,
    impuestos: 0,
    total: 0,
    efectivo: 0,
    cambio: 0,
    fecha: '',
    hora: '',
  };

  hasData: boolean = false;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    // Obtener los datos del estado de navegación en el constructor
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['ticketData']) {
      this.ticketData = navigation.extras.state['ticketData'];
      this.hasData = true;
      console.log('Datos recibidos en constructor:', this.ticketData);
    }
  }

  ngOnInit(): void {
    // Solo acceder a history si estamos en el navegador
    if (this.isBrowser && !this.hasData) {
      const state = history.state;
      if (state && state.ticketData) {
        this.ticketData = state.ticketData;
        this.hasData = true;
        console.log('Datos recibidos en ngOnInit:', this.ticketData);
      }
    }

    // Si no hay datos después de ambas verificaciones, redirigir
    if (!this.hasData || !this.ticketData.items || this.ticketData.items.length === 0) {
      if (this.isBrowser) {
        setTimeout(() => {
          this.router.navigate(['/nueva-venta']);
        }, 100);
      }
    }
  }

  onImprimir(): void {
    if (this.isBrowser) {
      window.print();
    }
  }

  onNuevaVenta(): void {
    this.router.navigate(['/nueva-venta']);
  }
}
