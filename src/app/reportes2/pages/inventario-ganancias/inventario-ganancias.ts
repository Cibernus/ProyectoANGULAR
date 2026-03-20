import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteToolbar } from '../../components/reporte-toolbar/reporte-toolbar';
import { ReporteTable } from '../../components/reporte-table/reporte-table';
import { ReportesService } from '../../services/reportes.service';
import { ExcelService } from '../../services/excel.service';
import { Producto } from '../../models/producto.interface';
import { Columna } from '../../models/columna.interface';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-inventario-ganancias',
  standalone: true,
  imports: [
    CommonModule,
    ReporteToolbar,
    ReporteTable,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './inventario-ganancias.html',
  styleUrl: './inventario-ganancias.css',
})
export class InventarioGananciasPage2 implements OnInit {
  productosOriginal: Producto[] = [];
  productosFiltrados: Producto[] = [];

  columnas: Columna[] = [
    { campo: 'nombre', titulo: 'Producto' },
    { campo: 'stock', titulo: 'Stock Actual', tipo: 'numero' },
    { campo: 'valorTotal', titulo: 'Valor Total', tipo: 'moneda' },
    { campo: 'costoTotal', titulo: 'Costo Total', tipo: 'moneda' },
    { campo: 'gananciaTotal', titulo: 'Ganancia Total', tipo: 'moneda' },
  ];

  opcionesOrden = [
    { valor: 'mayor-ganancia', etiqueta: 'Mayor ganancia' },
    { valor: 'menor-ganancia', etiqueta: 'Menor ganancia' },
    { valor: 'mayor-valor-total', etiqueta: 'Mayor valor total' },
    { valor: 'menor-valor-total', etiqueta: 'Menor valor total' },
    { valor: 'mayor-costo-total', etiqueta: 'Mayor costo total' },
    { valor: 'menor-costo-total', etiqueta: 'Menor costo total' },
  ];

  terminoBusqueda = '';
  criterioOrden = '';

  constructor(
    private reportesService: ReportesService,
    private excelService: ExcelService,
  ) {}

  ngOnInit(): void {
    this.productosOriginal = this.reportesService.getProductos();
    this.productosFiltrados = [...this.productosOriginal];
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
    let resultado = this.reportesService.buscarEnDatos(
      this.productosOriginal,
      this.terminoBusqueda,
    );
    if (this.criterioOrden) {
      resultado = this.reportesService.ordenarProductos(resultado, this.criterioOrden);
    }
    this.productosFiltrados = resultado;
  }

  onDescargar(): void {
    this.excelService.exportarAExcel(this.productosFiltrados, 'inventario-ganancias');
  }
}
