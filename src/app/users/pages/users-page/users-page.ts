import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersToolbar } from '../../components/users-toolbar/users-toolbar';
import { UsersTable, User } from '../../components/users-table/users-table';
import { UserForm } from '../../components/user-form/user-form';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-users-page',
  imports: [
    CommonModule,
    UsersToolbar,
    UsersTable,
    UserForm,
    NotificationsDropdownComponent,
    UserDropdownComponent,
  ],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {
  users: User[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'González',
      telefono: '5551234567',
      correo: 'juan@example.com',
      rol: 'Admin',
    },
    {
      id: 2,
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Martínez',
      telefono: '5559876543',
      correo: 'maria@example.com',
      rol: 'Usuario',
    },
  ];

  filteredUsers: User[] = [...this.users];
  selectedUser: User = this.getEmptyUser();
  formMode: 'create' | 'edit' = 'create';
  showForm = false;

  // Búsqueda
  onSearch(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.filteredUsers = [...this.users];
      return;
    }

    const term = searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(
      (user) =>
        user.nombre.toLowerCase().includes(term) ||
        user.apellidoPaterno.toLowerCase().includes(term) ||
        user.correo.toLowerCase().includes(term),
    );
  }

  // Abrir formulario para agregar
  openAddForm() {
    this.formMode = 'create';
    this.selectedUser = this.getEmptyUser();
    this.showForm = true;
  }

  // Abrir formulario para editar
  openEditForm(user: User) {
    this.formMode = 'edit';
    this.selectedUser = { ...user };
    this.showForm = true;
  }

  // Guardar usuario (crear o actualizar)
  saveUser(user: User) {
    if (this.formMode === 'create') {
      const newId = Math.max(...this.users.map((u) => u.id || 0)) + 1;
      this.users.push({ ...user, id: newId });
    } else {
      const index = this.users.findIndex((u) => u.id === user.id);
      if (index !== -1) {
        this.users[index] = { ...user };
      }
    }

    this.filteredUsers = [...this.users];
    this.closeForm();
  }

  // Eliminar usuario
  deleteUser(user: User) {
    if (confirm(`¿Eliminar a ${user.nombre} ${user.apellidoPaterno}?`)) {
      this.users = this.users.filter((u) => u.id !== user.id);
      this.filteredUsers = [...this.users];
    }
  }

  // Cerrar formulario
  closeForm() {
    this.showForm = false;
    this.selectedUser = this.getEmptyUser();
  }

  // Usuario vacío
  private getEmptyUser(): User {
    return {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      correo: '',
      rol: '',
    };
  }
}
