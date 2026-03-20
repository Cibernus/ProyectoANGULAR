import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Order {
  clavepedido?: string;
  fechapedido: string;
  estado: string;
  observaciones: string;
  claveempleado: string;
  tipopedido: string;
  claveproveedor: string;
  total: number;
}

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css',
})
export class OrderForm {

  @Input() isOpen = false;
  @Input() isEditMode = false;
  @Input() order: Order = this.getEmptyOrder();

  @Output() save = new EventEmitter<Order>();
  @Output() closeForm = new EventEmitter<void>();


  getEmptyOrder(): Order {
    return {
      fechapedido: '',
      estado: '',
      observaciones: '',
      claveempleado: '',
      tipopedido: '',
      claveproveedor: '',
      total: 0
    };
  }


  submitForm() {
    this.save.emit(this.order);
  }

  close() {
    this.closeForm.emit();
  }

}