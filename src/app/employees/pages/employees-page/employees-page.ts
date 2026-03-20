import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesToolbar } from '../../components/employees-toolbar/employees-toolbar';
import { EmployeeForm } from '../../components/employee-form/employee-form';
import { EmployeesTable } from '../../components/employees-table/employees-table';
import { Employee } from '../../services/employees.service'; // 👈 importamos el modelo desde el service
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';
import { EmployeesService } from '../../services/employees.service'; // 👈 importamos el service

@Component({
  selector: 'app-employees-page',
  standalone: true,
  imports: [
    CommonModule,
    EmployeesToolbar,
    EmployeesTable,
    EmployeeForm,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './employees-page.html',
  styleUrl: './employees-page.css',
})
export class EmployeesPage {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  selectedEmployee: Employee = this.getEmptyEmployee();
  formMode: 'create' | 'edit' = 'create';
  showForm = false;

  constructor(private empleadosService: EmployeesService) {
    this.loadEmployees(); // 👈 cargamos empleados al iniciar
  }

  // Cargar empleados desde la API
  loadEmployees() {
    this.empleadosService.getEmpleados().subscribe(data => {
      this.employees = data;
      this.filteredEmployees = [...this.employees];
    });
  }

  // Búsqueda
  onSearch(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.filteredEmployees = [...this.employees];
      return;
    }
    const term = searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.nombre.toLowerCase().includes(term) ||
        employee.apellido_paterno.toLowerCase().includes(term) ||
        employee.curp.toLowerCase().includes(term),
    );
  }

  // Abrir formulario para agregar
  openAddForm() {
    this.formMode = 'create';
    this.selectedEmployee = this.getEmptyEmployee();
    this.showForm = true;
  }

  // Abrir formulario para editar
  openEditForm(employee: Employee) {
    this.formMode = 'edit';
    this.selectedEmployee = { ...employee };
    this.showForm = true;
  }

  // Guardar empleado (crear o actualizar)
  saveEmployee(employee: Employee) {
    if (this.formMode === 'create') {
      this.empleadosService.createEmpleado(employee).subscribe(nuevo => {
        this.employees.push(nuevo);
        this.filteredEmployees = [...this.employees];
        this.closeForm();
      });
    } else {
      if (employee.claveEmpleado) {
        this.empleadosService.updateEmpleado(employee.claveEmpleado, employee).subscribe(actualizado => {
          const index = this.employees.findIndex(e => e.claveEmpleado === actualizado.claveEmpleado);
          if (index !== -1) {
            this.employees[index] = actualizado;
          }
          this.filteredEmployees = [...this.employees];
          this.closeForm();
        });
      }
    }
  }

  // Eliminar empleado
  deleteEmployee(employee: Employee) {
    if (employee.claveEmpleado && confirm(`¿Eliminar a ${employee.nombre} ${employee.apellido_paterno}?`)) {
      this.empleadosService.deleteEmpleado(employee.claveEmpleado).subscribe(() => {
        this.employees = this.employees.filter(e => e.claveEmpleado !== employee.claveEmpleado);
        this.filteredEmployees = [...this.employees];
      });
    }
  }

  // Cerrar formulario
  closeForm() {
    this.showForm = false;
    this.selectedEmployee = this.getEmptyEmployee();
  }

  // Empleado vacío
  private getEmptyEmployee(): Employee {
    return {
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      telefono: '',
      curp: '',
      estado:true
    };
  }
}
