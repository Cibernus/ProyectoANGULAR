import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersToolbar } from '../../components/orders-toolbar/orders-toolbar';
import { OrdersTable, Order } from '../../components/orders-table/orders-table';
import { OrderForm } from '../../components/order-form/order-form';

import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [
    CommonModule,
    OrdersToolbar,
    OrdersTable,
    OrderForm,
    NotificationsDropdownComponent,
    UserDropdownComponent
  ],
  templateUrl: './orders-page.html',
  styleUrl: './orders-page.css'
})
export class OrdersPage {

  orders: Order[] = [
    {
      clavepedido: 'P001',
      fechapedido: '2026-03-16',
      estado: 'Pendiente',
      observaciones: 'Pedido a proveedor',
      claveempleado: 'EMP01',
      tipopedido: 'Compra',
      claveproveedor: 'PR01',
      total: 450
    },
    {
      clavepedido: 'P002',
      fechapedido: '2026-03-15',
      estado: 'Completado',
      observaciones: 'Pedido urgente',
      claveempleado: 'EMP02',
      tipopedido: 'Reposición',
      claveproveedor: 'PR02',
      total: 300
    }
  ];

  filteredOrders: Order[] = [...this.orders];

  selectedOrder: Order = this.getEmptyOrder();

  isFormOpen = false;

  isEditMode = false;


  // BUSCAR
  onSearch(searchTerm: string) {

    if (!searchTerm.trim()) {
      this.filteredOrders = [...this.orders];
      return;
    }

    const term = searchTerm.toLowerCase();

    this.filteredOrders = this.orders.filter(
      (order) =>
        order.clavepedido?.toLowerCase().includes(term) ||
        order.estado.toLowerCase().includes(term) ||
        order.tipopedido.toLowerCase().includes(term)
    );

  }


  // ABRIR FORM CREAR
  openForm() {
    this.isEditMode = false;
    this.selectedOrder = this.getEmptyOrder();
    this.isFormOpen = true;
  }


  // ABRIR FORM EDITAR
  editOrder(order: Order) {
    this.isEditMode = true;
    this.selectedOrder = { ...order };
    this.isFormOpen = true;
  }


  // GUARDAR
  saveOrder(order: Order) {

    if (!this.isEditMode) {

      const newId = 'P' + (this.orders.length + 1).toString().padStart(3, '0');

      this.orders.push({
        ...order,
        clavepedido: newId
      });

    } else {

      const index = this.orders.findIndex(
        (o) => o.clavepedido === order.clavepedido
      );

      if (index !== -1) {
        this.orders[index] = { ...order };
      }

    }

    this.filteredOrders = [...this.orders];

    this.closeForm();

  }


  // ELIMINAR
  deleteOrder(order: Order) {

    if (confirm(`¿Eliminar el pedido ${order.clavepedido}?`)) {

      this.orders = this.orders.filter(
        (o) => o.clavepedido !== order.clavepedido
      );

      this.filteredOrders = [...this.orders];

    }

  }


  // CERRAR FORM
  closeForm() {
    this.isFormOpen = false;
    this.selectedOrder = this.getEmptyOrder();
  }


  // PEDIDO VACÍO
  private getEmptyOrder(): Order {
    return {
      fechapedido: '',
      estado: '',
      observaciones: '',
      claveempleado: '',
      tipopedido: '',
      claveproveedor: '',
      total: 0
    };
  }

}