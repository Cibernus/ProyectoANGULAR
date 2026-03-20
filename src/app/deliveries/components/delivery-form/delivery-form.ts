import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Delivery {
  claveentrega?: string;
  fecha_entrega: string;
  estado: string;
  total: number;
  descripcion: string;
  tipo_entrea: string;
  clavepedido: string;
}

@Component({
  selector: 'app-delivery-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delivery-form.html',
  styleUrl: './delivery-form.css',
})
export class DeliveryForm {

  @Input() delivery: Delivery = {
    fecha_entrega: '',
    estado: '',
    total: 0,
    descripcion: '',
    tipo_entrea: '',
    clavepedido: ''
  };

  @Input() mode: 'create' | 'edit' = 'create';
  @Input() visible = false;
  
  @Output() save = new EventEmitter<Delivery>();
  @Output() close = new EventEmitter<void>();

  onSubmit() {
    this.save.emit(this.delivery);
  }

  onClose() {
    this.close.emit();
  }

}