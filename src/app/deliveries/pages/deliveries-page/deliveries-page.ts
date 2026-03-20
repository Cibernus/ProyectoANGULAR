import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveriesToolbar } from '../../components/deliveries-toolbar/deliveries-toolbar';
import { DeliveriesTable, Delivery } from '../../components/deliveries-table/deliveries-table';
import { DeliveryForm } from '../../components/delivery-form/delivery-form';

import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-deliveries-page',
  standalone: true,
  imports: [
    CommonModule,
    DeliveriesToolbar,
    DeliveriesTable,
    DeliveryForm,
    NotificationsDropdownComponent,
    UserDropdownComponent
  ],
  templateUrl: './deliveries-page.html',
  styleUrl: './deliveries-page.css',
})
export class DeliveriesPage {

  deliveries: Delivery[] = [
    {
      claveentrega: 'E001',
      fecha_entrega: '2026-03-16',
      estado: 'Entregado',
      total: 500,
      descripcion: 'Entrega proveedor',
      tipo_entrea: 'Compra',
      clavepedido: 'P001'
    },
    {
      claveentrega: 'E002',
      fecha_entrega: '2026-03-15',
      estado: 'Pendiente',
      total: 300,
      descripcion: 'Entrega pedido',
      tipo_entrea: 'Pedido',
      clavepedido: 'P002'
    }
  ];

  filteredDeliveries: Delivery[] = [...this.deliveries];

  selectedDelivery: Delivery = this.getEmptyDelivery();

  formMode: 'create' | 'edit' = 'create';

  showForm = false;

  // Búsqueda
  onSearch(searchTerm: string) {

    if (!searchTerm.trim()) {
      this.filteredDeliveries = [...this.deliveries];
      return;
    }

    const term = searchTerm.toLowerCase();

    this.filteredDeliveries = this.deliveries.filter(
      (delivery) =>
        delivery.claveentrega?.toLowerCase().includes(term) ||
        delivery.estado.toLowerCase().includes(term) ||
        delivery.tipo_entrea.toLowerCase().includes(term)
    );
  }

  // Abrir formulario crear
  openAddForm() {
    this.formMode = 'create';
    this.selectedDelivery = this.getEmptyDelivery();
    this.showForm = true;
  }

  // Abrir formulario editar
  openEditForm(delivery: Delivery) {
    this.formMode = 'edit';
    this.selectedDelivery = { ...delivery };
    this.showForm = true;
  }

  // Guardar entrega
  saveDelivery(delivery: Delivery) {

    if (this.formMode === 'create') {

      const newId = 'E' + (this.deliveries.length + 1).toString().padStart(3, '0');

      this.deliveries.push({
        ...delivery,
        claveentrega: newId
      });

    } else {

      const index = this.deliveries.findIndex(
        (d) => d.claveentrega === delivery.claveentrega
      );

      if (index !== -1) {
        this.deliveries[index] = { ...delivery };
      }

    }

    this.filteredDeliveries = [...this.deliveries];

    this.closeForm();
  }

  // Eliminar
  deleteDelivery(delivery: Delivery) {

    if (confirm(`¿Eliminar la entrega ${delivery.claveentrega}?`)) {

      this.deliveries = this.deliveries.filter(
        (d) => d.claveentrega !== delivery.claveentrega
      );

      this.filteredDeliveries = [...this.deliveries];

    }
  }

  // Cerrar formulario
  closeForm() {
    this.showForm = false;
    this.selectedDelivery = this.getEmptyDelivery();
  }

  // Entrega vacía
  private getEmptyDelivery(): Delivery {
    return {
      fecha_entrega: '',
      estado: '',
      total: 0,
      descripcion: '',
      tipo_entrea: '',
      clavepedido: ''
    };
  }

}