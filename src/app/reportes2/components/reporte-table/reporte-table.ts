import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Columna } from '../../models/columna.interface';

@Component({
  selector: 'app-reporte-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-table.html',
  styleUrl: './reporte-table.css',
})
export class ReporteTable {
  @Input() columnas: Columna[] = [];
  @Input() datos: any[] = [];

  formatearValor(valor: any, tipo?: string): string {
    if (valor === null || valor === undefined) return '—';

    switch (tipo) {
      case 'moneda':
        return new Intl.NumberFormat('es-MX', {
          style: 'currency',
          currency: 'MXN',
        }).format(valor);
      case 'numero':
        return `${valor} unidades`;
      case 'fecha':
        return valor;
      default:
        return String(valor);
    }
  }
}
