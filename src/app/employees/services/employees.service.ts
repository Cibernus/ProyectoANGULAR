// src/app/employees/services/employees.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelo Employee
export interface Employee {
 claveEmpleado?: string;
  nombre: string;
  apellido_paterno: string;   // 👈 igual que en el backend
  apellido_materno: string;   // 👈 igual que en el backend
  telefono: string;
  curp: string;
  estado?: boolean;
}

@Injectable({
  providedIn: 'root' // disponible en toda la app
})
export class EmployeesService {
  private apiUrl = 'http://localhost:5027/api/Empleado'; // cambia por tu endpoint real

  constructor(private http: HttpClient) {}

  // Crear empleado (POST)
  createEmpleado(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, emp);
  }

  // Listar empleados (GET)
  getEmpleados(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // Actualizar empleado (PUT)
  updateEmpleado(claveEmpleado: string, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${claveEmpleado}`, emp);
  }

  // Eliminar empleado (DELETE)
  deleteEmpleado(claveEmpleado: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${claveEmpleado}`);
  }
}
