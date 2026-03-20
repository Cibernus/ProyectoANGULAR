import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteToolbar } from '../../components/reporte-toolbar/reporte-toolbar';
import { ReporteTable } from '../../components/reporte-table/reporte-table';
import { ReportesService } from '../../services/reportes.service';
import { ExcelService } from '../../services/excel.service';
import { Movimiento } from '../../models/movimiento.interface';
import { Columna } from '../../models/columna.interface';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-entradas-salidas',
  standalone: true,
  imports: [
    CommonModule,
    ReporteToolbar,
    ReporteTable,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './entradas-salidas.html',
  styleUrl: './entradas-salidas.css',
})
export class EntradasSalidasPage2 implements OnInit {
  movimientosOriginal: Movimiento[] = [];
  movimientosFiltrados: Movimiento[] = [];

  columnas: Columna[] = [
    { campo: 'tipo', titulo: 'Tipo de movimiento' },
    { campo: 'fecha', titulo: 'Fecha', tipo: 'fecha' },
    { campo: 'producto', titulo: 'Producto' },
    { campo: 'cantidad', titulo: 'Cantidad', tipo: 'numero' },
    { campo: 'precio', titulo: 'Total', tipo: 'moneda' },
  ];

  opcionesOrden = [
    { valor: 'fecha-reciente', etiqueta: 'Fecha más reciente' },
    { valor: 'fecha-antigua', etiqueta: 'Fecha más antigua' },
    { valor: 'mayor-total', etiqueta: 'Mayor total' },
    { valor: 'menor-total', etiqueta: 'Menor total' },
  ];

  opcionesTipo = [
    { valor: 'todos', etiqueta: 'Todos' },
    { valor: 'entrada', etiqueta: 'Entradas' },
    { valor: 'salida', etiqueta: 'Salidas' },
  ];

  terminoBusqueda = '';
  criterioOrden = '';
  tipoFiltro = 'todos';

  constructor(
    private reportesService: ReportesService,
    private excelService: ExcelService,
  ) {}

  ngOnInit(): void {
    this.movimientosOriginal = this.reportesService.getMovimientos();
    this.movimientosFiltrados = [...this.movimientosOriginal];
  }

  onBuscar(termino: string): void {
    this.terminoBusqueda = termino;
    this.aplicarFiltros();
  }

  onOrdenar(criterio: string): void {
    this.criterioOrden = criterio;
    this.aplicarFiltros();
  }

  onFiltrarTipo(tipo: string): void {
    this.tipoFiltro = tipo;
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let resultado = this.reportesService.buscarEnDatos(
      this.movimientosOriginal,
      this.terminoBusqueda,
    );
    resultado = this.reportesService.filtrarMovimientosPorTipo(resultado, this.tipoFiltro);
    this.movimientosFiltrados = resultado;
  }

  onDescargar(): void {
    this.excelService.exportarAExcel(this.movimientosFiltrados, 'entradas-salidas');
  }
}
