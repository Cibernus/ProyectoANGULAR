import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteToolbar } from '../../components/reporte-toolbar/reporte-toolbar';
import { ReporteTable } from '../../components/reporte-table/reporte-table';
import { ReportesService } from '../../services/reportes.service';
import { ExcelService } from '../../services/excel.service';
import { Stock } from '../../models/stock.interface';
import { Columna } from '../../models/columna.interface';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-reporte-stock',
  standalone: true,
  imports: [
    CommonModule,
    ReporteToolbar,
    ReporteTable,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './reporte-stock.html',
  styleUrl: './reporte-stock.css',
})
export class ReporteStockPage2 implements OnInit {
  stockOriginal: Stock[] = [];
  stockFiltrado: Stock[] = [];

  columnas: Columna[] = [
    { campo: 'producto', titulo: 'Producto' },
    { campo: 'stockActual', titulo: 'Stock Actual', tipo: 'numero' },
    { campo: 'ventas', titulo: 'Ventas', tipo: 'numero' },
    { campo: 'valorTotal', titulo: 'Valor Total', tipo: 'moneda' },
    { campo: 'nivelDeRotacion', titulo: 'Nivel de Rotación' },
  ];

  opcionesOrden = [
    { valor: 'a-z', etiqueta: 'Nombre A-Z' },
    { valor: 'z-a', etiqueta: 'Nombre Z-A' },
    { valor: 'mayor-valor', etiqueta: 'Mayor valor total' },
    { valor: 'menor-valor', etiqueta: 'Menor valor total' },
    { valor: 'mayor-stock', etiqueta: 'Mayor stock' },
    { valor: 'menor-stock', etiqueta: 'Menor stock' },
    { valor: 'mayor-rotacion', etiqueta: 'Mayor rotación' },
    { valor: 'menor-rotacion', etiqueta: 'Menor rotación' },
  ];

  terminoBusqueda = '';
  criterioOrden = '';

  constructor(
    private reportesService: ReportesService,
    private excelService: ExcelService,
  ) {}

  ngOnInit(): void {
    this.stockOriginal = this.reportesService.getStock();
    this.stockFiltrado = [...this.stockOriginal];
  }

  onBuscar(termino: string): void {
    this.terminoBusqueda = termino;
    this.aplicarFiltros();
  }

  onOrdenar(criterio: string): void {
    this.criterioOrden = criterio;
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let resultado = this.reportesService.buscarEnDatos(this.stockOriginal, this.terminoBusqueda);
    if (this.criterioOrden) {
      resultado = this.reportesService.ordenarStock(resultado, this.criterioOrden);
    }
    this.stockFiltrado = resultado;
  }

  onDescargar(): void {
    this.excelService.exportarAExcel(this.stockFiltrado, 'reporte-stock');
  }
}
