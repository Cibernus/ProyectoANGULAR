import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionFiltro } from '../../models/opcion-filtro.interface';
import { RouterModule } from '@angular/router'; // ← agrega esto

@Component({
  selector: 'app-reporte-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reporte-toolbar.html',
  styleUrl: './reporte-toolbar.css',
})
export class ReporteToolbar {
  // ── Inputs ──
  @Input() opcionesOrden: OpcionFiltro[] = [];
  @Input() opcionesTipo: OpcionFiltro[] = []; // solo entradas-salidas
  @Input() mostrarTipo = false;
  @Input() mostrarDescargar = true;

  // ── Outputs ──
  @Output() buscar = new EventEmitter<string>();
  @Output() ordenar = new EventEmitter<string>();
  @Output() filtrarTipo = new EventEmitter<string>();
  @Output() descargar = new EventEmitter<void>();

  dropdownOrdenAbierto = false;
  dropdownTipoAbierto = false;
  criterioOrdenActivo = '';
  tipoActivo = '';

  onBuscar(termino: string): void {
    this.buscar.emit(termino);
  }

  onOrdenar(valor: string, etiqueta: string): void {
    this.criterioOrdenActivo = etiqueta;
    this.dropdownOrdenAbierto = false;
    this.ordenar.emit(valor);
  }

  onFiltrarTipo(valor: string, etiqueta: string): void {
    this.tipoActivo = etiqueta;
    this.dropdownTipoAbierto = false;
    this.filtrarTipo.emit(valor);
  }

  onDescargar(): void {
    this.descargar.emit();
  }

  toggleOrden(): void {
    this.dropdownOrdenAbierto = !this.dropdownOrdenAbierto;
    this.dropdownTipoAbierto = false;
  }

  toggleTipo(): void {
    this.dropdownTipoAbierto = !this.dropdownTipoAbierto;
    this.dropdownOrdenAbierto = false;
  }
}
