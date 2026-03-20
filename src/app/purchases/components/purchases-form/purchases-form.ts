import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Compra, TipoCompra, EstadoCompra, FormaPago } from '../../models/purchases.model';

@Component({
  standalone: true,
  selector: 'app-compra-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './purchases-form.html',
  styleUrl: './purchases-form.css',
})
export class CompraForm implements OnChanges {
  @Input() compra: Compra = this.getEmpty();
  @Input() mode: 'create' | 'edit' = 'create';
  @Input() visible = false;

  @Output() save = new EventEmitter<Compra>();
  @Output() close = new EventEmitter<void>();

  // Paso actual del wizard: 1 = Info general, 2 = Datos según tipo
  currentStep = 1;

  ngOnChanges() {
    if (this.visible) {
      this.currentStep = 1;
    }
  }

  get isStep1() {
    return this.currentStep === 1;
  }
  get isStep2() {
    return this.currentStep === 2;
  }
  get isPedido() {
    return this.compra.tipoCompra === 'pedido';
  }

  nextStep() {
    this.currentStep = 2;
  }
  prevStep() {
    this.currentStep = 1;
  }

  onSubmit() {
    this.save.emit(this.compra);
  }

  onClose() {
    this.currentStep = 1;
    this.close.emit();
  }

  private getEmpty(): Compra {
    return {
      fechaCompra: '',
      tipoCompra: 'pedido',
      estado: 'pendiente',
      total: 0,
      formaPago: 'efectivo',
      idEmpleado: '',
    };
  }
}
