// src/app/employees/components/employees-table/employees-table.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../services/employees.service'; // 👈 Importa el modelo del service

@Component({
  selector: 'app-employees-table',
  imports: [CommonModule],
  templateUrl: './employees-table.html',
  styleUrls: ['./employees-table.css'], // 👈 corregido: debe ser styleUrls (plural)
})
export class EmployeesTable {
  @Input() employees: Employee[] = [];
  @Output() edit = new EventEmitter<Employee>();
  @Output() delete = new EventEmitter<Employee>();

  onEdit(employee: Employee) {
    this.edit.emit(employee);
  }

  onDelete(employee: Employee) {
    this.delete.emit(employee);
  }
}
