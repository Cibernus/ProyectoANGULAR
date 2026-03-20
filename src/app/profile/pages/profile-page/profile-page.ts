import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationsDropdownComponent } from '../../../dashboard/components/notifications-dropdown/notifications-dropdown.component';
import { UserDropdownComponent } from '../../../dashboard/components/user-dropdown/user-dropdown.component';
import { ProfileService } from '../../services/profile.service';
import { UserProfile, ChangePassword } from '../../models/user-profile.interface';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NotificationsDropdownComponent, UserDropdownComponent],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit {
  usuario: UserProfile = {
    idUsuario: 0,
    nombreUsuario: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correoElectronico: '',
    rol: '',
  };

  iniciales = '';

  permisos = [
    { modulo: 'Productos', icono: 'bx-package', acceso: true },
    { modulo: 'Ventas', icono: 'bx-receipt', acceso: true },
    { modulo: 'Compras', icono: 'bx-cart', acceso: true },
    { modulo: 'Proveedores', icono: 'bx-store', acceso: true },
    { modulo: 'Usuarios', icono: 'bx-group', acceso: true },
    { modulo: 'Empleados', icono: 'bx-id-card', acceso: true },
    { modulo: 'Reportes', icono: 'bx-bar-chart-alt-2', acceso: true },
    { modulo: 'Configuración', icono: 'bx-cog', acceso: true },
  ];

  cambioContrasena: ChangePassword = {
    contrasenaActual: '',
    contrasenaNueva: '',
    confirmar: '',
  };

  modoEdicion = false;
  mostrarCambioContrasena = false;
  error = '';
  exito = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // TODO: reemplazar 1 con el id real del usuario autenticado
    this.profileService.getPerfil(1).subscribe({
      next: (data) => {
        this.usuario = data;
        this.iniciales = this.getIniciales(data.nombreUsuario, data.apellidoPaterno);
      },
    });
  }

  getIniciales(nombre: string, apellido: string): string {
    return (nombre?.charAt(0) ?? '') + (apellido?.charAt(0) ?? '');
  }

  activarEdicion(): void {
    this.modoEdicion = true;
    this.exito = '';
    this.error = '';
  }

  cancelarEdicion(): void {
    this.modoEdicion = false;
  }

  guardarPerfil(): void {
    this.profileService.updatePerfil(this.usuario.idUsuario, this.usuario).subscribe({
      next: () => {
        this.modoEdicion = false;
        this.exito = 'Perfil actualizado correctamente.';
        this.iniciales = this.getIniciales(
          this.usuario.nombreUsuario,
          this.usuario.apellidoPaterno,
        );
      },
    });
  }

  toggleCambioContrasena(): void {
    this.mostrarCambioContrasena = !this.mostrarCambioContrasena;
    this.cambioContrasena = { contrasenaActual: '', contrasenaNueva: '', confirmar: '' };
    this.error = '';
    this.exito = '';
  }

  guardarContrasena(): void {
    if (this.cambioContrasena.contrasenaNueva !== this.cambioContrasena.confirmar) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }
    this.profileService.changePassword(this.usuario.idUsuario, this.cambioContrasena).subscribe({
      next: () => {
        this.mostrarCambioContrasena = false;
        this.exito = 'Contraseña actualizada correctamente.';
        this.cambioContrasena = { contrasenaActual: '', contrasenaNueva: '', confirmar: '' };
      },
    });
  }
}
