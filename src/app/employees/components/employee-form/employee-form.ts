// src/app/employees/components/employee-form/employee-form.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../services/employees.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css'],
})
export class EmployeeForm {
  @Input() employee: Employee = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    telefono: '',
    curp: '',
    estado: true
  };

  @Input() mode: 'create' | 'edit' = 'create';
  @Input() visible = false;
    
  @Output() save = new EventEmitter<Employee>();
  @Output() close = new EventEmitter<void>();

  showErrorModal = false; // 👈 Controla el modal de error

  onSubmit() {
    // Validación manual: si algún campo obligatorio está vacío
    if (
      !this.employee.nombre ||
      !this.employee.apellido_paterno ||
      !this.employee.telefono ||
      !this.employee.curp
    ) {
      this.showErrorModal = true; // activa el modal de error
      return; // corta el flujo, no emite datos
    }

    // Si todo está correcto, emite los datos al padre
    this.save.emit(this.employee);
  }
  
  onClose() {
    this.close.emit();
  }
}
