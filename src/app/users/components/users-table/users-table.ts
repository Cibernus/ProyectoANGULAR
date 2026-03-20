import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz directa en el componente
export interface User {
  id?: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  correo: string;
  rol: string;
}

@Component({
  selector: 'app-users-table',
  imports: [CommonModule],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable {
  @Input() users: User[] = [];
  @Output() edit = new EventEmitter<User>();
  @Output() delete = new EventEmitter<User>();

  onEdit(user: User) {
    this.edit.emit(user);
  }

  onDelete(user: User) {
    this.delete.emit(user);
  }
}
