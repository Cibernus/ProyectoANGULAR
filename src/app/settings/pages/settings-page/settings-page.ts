import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';
import { SettingsService } from '../../services/settings.service';
import { UnidadMedida } from '../../models/unidad-medida.interface';
import { UnidadVenta } from '../../models/unidad-venta.interface';
import { UnidadCompra } from '../../models/unidad-compra.interface';
import { Categoria } from '../../models/categoria.interface';
import { Impuesto } from '../../models/impuesto.interface';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationsDropdownComponent, UserDropdownComponent],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css',
})
export class SettingsPage implements OnInit {
  seccionActiva = 'unidades-medida';

  secciones = [
    { id: 'unidades-medida', label: 'Unidades de medida', icono: 'bx-ruler' },
    { id: 'unidades-venta', label: 'Unidades de venta', icono: 'bx-purchase-tag' },
    { id: 'unidades-compra', label: 'Unidades de compra', icono: 'bx-cart' },
    { id: 'categorias', label: 'Categorías', icono: 'bx-category' },
    { id: 'impuestos', label: 'Impuestos', icono: 'bx-receipt' },
  ];

  unidadesMedida: UnidadMedida[] = [];
  unidadesVenta: UnidadVenta[] = [];
  unidadesCompra: UnidadCompra[] = [];
  categorias: Categoria[] = [];
  impuesto: Impuesto = { porcentaje: 16 };

  mostrarModal = false;
  nuevoItem: any = {};
  itemEditando: any = null;
  error = '';
  exito = '';

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.cargarSeccion('unidades-medida');
  }

  cambiarSeccion(id: string): void {
    this.seccionActiva = id;
    this.error = '';
    this.exito = '';
    this.cargarSeccion(id);
  }

  cargarSeccion(id: string): void {
    switch (id) {
      case 'unidades-medida':
        this.settingsService
          .getUnidadesMedida()
          .subscribe({ next: (data) => (this.unidadesMedida = data) });
        break;
      case 'unidades-venta':
        this.settingsService
          .getUnidadesVenta()
          .subscribe({ next: (data) => (this.unidadesVenta = data) });
        break;
      case 'unidades-compra':
        this.settingsService
          .getUnidadesCompra()
          .subscribe({ next: (data) => (this.unidadesCompra = data) });
        break;
      case 'categorias':
        this.settingsService
          .getCategorias()
          .subscribe({ next: (data) => (this.categorias = data) });
        break;
      case 'impuestos':
        this.settingsService.getImpuesto().subscribe({ next: (data) => (this.impuesto = data) });
        break;
    }
  }

  abrirModal(item?: any): void {
    this.itemEditando = item ?? null;
    this.nuevoItem = item ? { ...item } : {};
    this.mostrarModal = true;
    this.error = '';
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.itemEditando = null;
    this.nuevoItem = {};
  }

  guardarItem(): void {
    if (this.itemEditando) {
      this.editarItem();
    } else {
      this.crearItem();
    }
  }

  crearItem(): void {
    switch (this.seccionActiva) {
      case 'unidades-medida':
        this.settingsService.createUnidadMedida(this.nuevoItem).subscribe({
          next: (data) => {
            this.unidadesMedida.push(data);
            this.cerrarModal();
            this.exito = 'Creado correctamente.';
          },
        });
        break;
      case 'unidades-venta':
        this.settingsService.createUnidadVenta(this.nuevoItem).subscribe({
          next: (data) => {
            this.unidadesVenta.push(data);
            this.cerrarModal();
            this.exito = 'Creado correctamente.';
          },
        });
        break;
      case 'unidades-compra':
        this.settingsService.createUnidadCompra(this.nuevoItem).subscribe({
          next: (data) => {
            this.unidadesCompra.push(data);
            this.cerrarModal();
            this.exito = 'Creado correctamente.';
          },
        });
        break;
      case 'categorias':
        this.settingsService.createCategoria(this.nuevoItem).subscribe({
          next: (data) => {
            this.categorias.push(data);
            this.cerrarModal();
            this.exito = 'Creado correctamente.';
          },
        });
        break;
    }
  }

  editarItem(): void {
    switch (this.seccionActiva) {
      case 'unidades-medida':
        this.settingsService
          .updateUnidadMedida(this.nuevoItem.idUnidadMedida, this.nuevoItem)
          .subscribe({
            next: (data) => {
              const i = this.unidadesMedida.findIndex(
                (u) => u.idUnidadMedida === data.idUnidadMedida,
              );
              if (i > -1) this.unidadesMedida[i] = data;
              this.cerrarModal();
              this.exito = 'Actualizado correctamente.';
            },
          });
        break;
      case 'unidades-venta':
        this.settingsService
          .updateUnidadVenta(this.nuevoItem.idUnidadVenta, this.nuevoItem)
          .subscribe({
            next: (data) => {
              const i = this.unidadesVenta.findIndex((u) => u.idUnidadVenta === data.idUnidadVenta);
              if (i > -1) this.unidadesVenta[i] = data;
              this.cerrarModal();
              this.exito = 'Actualizado correctamente.';
            },
          });
        break;
      case 'unidades-compra':
        this.settingsService
          .updateUnidadCompra(this.nuevoItem.idUnidadCompra, this.nuevoItem)
          .subscribe({
            next: (data) => {
              const i = this.unidadesCompra.findIndex(
                (u) => u.idUnidadCompra === data.idUnidadCompra,
              );
              if (i > -1) this.unidadesCompra[i] = data;
              this.cerrarModal();
              this.exito = 'Actualizado correctamente.';
            },
          });
        break;
      case 'categorias':
        this.settingsService.updateCategoria(this.nuevoItem.idCategoria, this.nuevoItem).subscribe({
          next: (data) => {
            const i = this.categorias.findIndex((c) => c.idCategoria === data.idCategoria);
            if (i > -1) this.categorias[i] = data;
            this.cerrarModal();
            this.exito = 'Actualizado correctamente.';
          },
        });
        break;
    }
  }

  eliminar(seccion: string, id: number): void {
    if (!confirm('¿Estás seguro de eliminar este registro?')) return;
    switch (seccion) {
      case 'unidades-medida':
        this.settingsService.deleteUnidadMedida(id).subscribe({
          next: () => {
            this.unidadesMedida = this.unidadesMedida.filter((u) => u.idUnidadMedida !== id);
            this.exito = 'Eliminado correctamente.';
          },
        });
        break;
      case 'unidades-venta':
        this.settingsService.deleteUnidadVenta(id).subscribe({
          next: () => {
            this.unidadesVenta = this.unidadesVenta.filter((u) => u.idUnidadVenta !== id);
            this.exito = 'Eliminado correctamente.';
          },
        });
        break;
      case 'unidades-compra':
        this.settingsService.deleteUnidadCompra(id).subscribe({
          next: () => {
            this.unidadesCompra = this.unidadesCompra.filter((u) => u.idUnidadCompra !== id);
            this.exito = 'Eliminado correctamente.';
          },
        });
        break;
      case 'categorias':
        this.settingsService.deleteCategoria(id).subscribe({
          next: () => {
            this.categorias = this.categorias.filter((c) => c.idCategoria !== id);
            this.exito = 'Eliminado correctamente.';
          },
        });
        break;
    }
  }

  guardarImpuesto(): void {
    this.settingsService.updateImpuesto(this.impuesto).subscribe({
      next: () => {
        this.exito = 'Impuesto actualizado correctamente.';
      },
    });
  }
}
