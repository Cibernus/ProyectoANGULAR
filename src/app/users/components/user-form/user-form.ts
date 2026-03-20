import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../users-table/users-table';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  @Input() user: User = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    rol: ''
  };
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() visible = false;
  
  @Output() save = new EventEmitter<User>();
  @Output() close = new EventEmitter<void>();

  onSubmit() {
    this.save.emit(this.user);
  }

  onClose() {
    this.close.emit();
  }
}
