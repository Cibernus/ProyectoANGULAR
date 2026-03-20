import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Supplier {
  id?: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  rfc: string;
}

@Component({
  selector: 'app-suppliers-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suppliers-form.html',
  styleUrl: './suppliers-form.css',
})
export class SuppliersForm {
  @Input() supplier: Supplier = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    rfc: ''
  };

  @Input() mode: 'create' | 'edit' = 'create';
  @Input() visible = false;
    
  @Output() save = new EventEmitter<Supplier>();
  @Output() close = new EventEmitter<void>();
  
  onSubmit(): void {
    this.save.emit(this.supplier);
  }
  
  onClose(): void {
    this.close.emit();
  }
}