import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-sale-summary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-sale-sumaryt.html',
  styleUrl: './new-sale-sumaryt.css',
})
export class NewSaleSummary {
  @Input() subtotal: number = 0;
  @Input() impuestos: number = 0;
  @Input() total: number = 0;
  
  private _efectivo: number = 0;
  @Input() 
  get efectivo(): number {
    return this._efectivo;
  }
  set efectivo(value: number) {
    this._efectivo = value;
    this.efectivoChange.emit(value);
  }
  
  @Output() efectivoChange = new EventEmitter<number>();
  @Output() cancelar = new EventEmitter<void>();
  @Output() confirmar = new EventEmitter<void>();

  get cambio(): number {
    return this.efectivo > this.total ? this.efectivo - this.total : 0;
  }

  onCancel(): void {
    this.cancelar.emit();
  }

  onConfirm(): void {
    this.confirmar.emit();
  }
}