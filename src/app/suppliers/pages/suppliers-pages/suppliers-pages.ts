import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersToolbar } from '../../components/suppliers-toolbar/suppliers-toolbar';
import { SuppliersForm, Supplier } from '../../components/suppliers-form/suppliers-form';
import { SuppliersTable } from '../../components/suppliers-table/suppliers-table';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-suppliers-pages',
  standalone: true,
  imports: [
    CommonModule,
    SuppliersToolbar,
    SuppliersTable,
    SuppliersForm,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './suppliers-pages.html',
  styleUrl: './suppliers-pages.css',
})
export class SuppliersPages {
  suppliers: Supplier[] = [
    {
      id: 'PROV-0001',
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'Martínez',
      telefono: '2719482848',
      rfc: 'GARC850101HDF',
    },
    {
      id: 'PROV-0002',
      nombre: 'Maria',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'Martínez',
      telefono: '2719482848',
      rfc: 'GARC850101HDF',
    },
  ];

  filteredSuppliers: Supplier[] = [...this.suppliers];
  selectedSupplier: Supplier = this.getEmptySupplier();
  formMode: 'create' | 'edit' = 'create';
  showForm = false;

  // Búsqueda
  onSearch(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.filteredSuppliers = [...this.suppliers];
      return;
    }

    const term = searchTerm.toLowerCase();
    this.filteredSuppliers = this.suppliers.filter(
      (supplier) =>
        supplier.nombre.toLowerCase().includes(term) ||
        supplier.apellidoPaterno.toLowerCase().includes(term) ||
        supplier.apellidoMaterno.toLowerCase().includes(term) ||
        supplier.rfc.toLowerCase().includes(term) ||
        supplier.telefono.includes(term),
    );
  }

  // Abrir formulario para agregar
  openAddForm() {
    this.formMode = 'create';
    this.selectedSupplier = this.getEmptySupplier();
    this.showForm = true;
  }

  // Abrir formulario para editar
  openEditForm(supplier: Supplier) {
    this.formMode = 'edit';
    this.selectedSupplier = { ...supplier };
    this.showForm = true;
  }

  // Guardar proveedor (crear o actualizar)
  saveSupplier(supplier: Supplier) {
    if (this.formMode === 'create') {
      // Generar nuevo ID
      const maxId =
        this.suppliers.length > 0
          ? Math.max(
              ...this.suppliers.map((s) => {
                const num = parseInt(s.id?.split('-')[1] || '0');
                return num;
              }),
            )
          : 0;
      const newId = `PROV-${String(maxId + 1).padStart(4, '0')}`;
      this.suppliers.push({ ...supplier, id: newId });
    } else {
      const index = this.suppliers.findIndex((s) => s.id === supplier.id);
      if (index !== -1) {
        this.suppliers[index] = { ...supplier };
      }
    }

    this.filteredSuppliers = [...this.suppliers];
    this.closeForm();
  }

  // Eliminar proveedor
  deleteSupplier(supplier: Supplier) {
    if (confirm(`¿Eliminar a ${supplier.nombre} ${supplier.apellidoPaterno}?`)) {
      this.suppliers = this.suppliers.filter((s) => s.id !== supplier.id);
      this.filteredSuppliers = [...this.suppliers];
    }
  }

  // Cerrar formulario
  closeForm() {
    this.showForm = false;
    this.selectedSupplier = this.getEmptySupplier();
  }

  // Proveedor vacío
  private getEmptySupplier(): Supplier {
    return {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      rfc: '',
    };
  }
}
