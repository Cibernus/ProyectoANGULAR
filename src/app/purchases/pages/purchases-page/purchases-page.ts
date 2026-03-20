import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasToolbar } from '../../components/purchases-toolbar/purchases-toolbar';
import { ComprasTable } from '../../components/purchases-table/purchases-table';
import { CompraForm } from '../../components/purchases-form/purchases-form';
import { Compra } from '../../models/purchases.model';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  standalone: true,
  selector: 'app-compras-page',
  imports: [
    CommonModule,
    ComprasToolbar,
    ComprasTable,
    CompraForm,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './purchases-page.html',
  styleUrl: './purchases-page.css',
})
export class PurchasesPage {
  compras: Compra[] = [
    {
      id: 'C-0001',
      fechaCompra: '2024-10-01T14:30',
      tipoCompra: 'pedido',
      estado: 'completada',
      total: 3200,
      formaPago: 'transferencia',
      idEmpleado: 'EMP-01',
      folio: 'F-2024-001',
      facturaProveedor: 'FAC-001',
    },
    {
      id: 'C-0002',
      fechaCompra: '2024-10-02T10:00',
      tipoCompra: 'directa',
      estado: 'pendiente',
      total: 1750,
      formaPago: 'efectivo',
      idEmpleado: 'EMP-02',
      referenciaPago: 'REF-001',
      documentoReferencia: 'DOC-001',
      origen: 'Proveedor local',
    },
  ];

  filteredCompras: Compra[] = [...this.compras];
  selectedCompra: Compra = this.getEmpty();
  formMode: 'create' | 'edit' = 'create';
  showForm = false;

  onSearch(term: string) {
    if (!term.trim()) {
      this.filteredCompras = [...this.compras];
      return;
    }
    const t = term.toLowerCase();
    this.filteredCompras = this.compras.filter(
      (c) =>
        c.id?.toLowerCase().includes(t) ||
        c.tipoCompra.toLowerCase().includes(t) ||
        c.estado.toLowerCase().includes(t) ||
        c.idEmpleado.toLowerCase().includes(t),
    );
  }

  openAddForm() {
    this.formMode = 'create';
    this.selectedCompra = this.getEmpty();
    this.showForm = true;
  }

  openEditForm(compra: Compra) {
    this.formMode = 'edit';
    this.selectedCompra = { ...compra };
    this.showForm = true;
  }

  saveCompra(compra: Compra) {
    if (this.formMode === 'create') {
      const newId = `C-${String(this.compras.length + 1).padStart(4, '0')}`;
      this.compras.push({ ...compra, id: newId });
    } else {
      const index = this.compras.findIndex((c) => c.id === compra.id);
      if (index !== -1) this.compras[index] = { ...compra };
    }
    this.filteredCompras = [...this.compras];
    this.closeForm();
  }

  deleteCompra(compra: Compra) {
    if (confirm(`¿Eliminar la compra ${compra.id}?`)) {
      this.compras = this.compras.filter((c) => c.id !== compra.id);
      this.filteredCompras = [...this.compras];
    }
  }

  closeForm() {
    this.showForm = false;
    this.selectedCompra = this.getEmpty();
  }

  private getEmpty(): Compra {
    return {
      fechaCompra: '',
      tipoCompra: 'pedido',
      estado: 'pendiente',
      total: 0,
      formaPago: 'efectivo',
      idEmpleado: '',
    };
  }
}
