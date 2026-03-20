import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  exportarAExcel(datos: any[], nombreArchivo: string): void {
    // Convierte los datos a hoja de Excel
    const worksheet = XLSX.utils.json_to_sheet(datos);

    // Crea un libro de trabajo
    const workbook = XLSX.utils.book_new();

    // Agrega la hoja al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    // Descarga el archivo
    XLSX.writeFile(workbook, `${nombreArchivo}.xlsx`);
  }
}
