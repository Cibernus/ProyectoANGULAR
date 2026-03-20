import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-toolbar.html',
  styleUrl: './ticket-toolbar.css',
})
export class TicketToolbar {
  @Output() nuevaVenta = new EventEmitter<void>();

  onNuevaVenta(): void {
    this.nuevaVenta.emit();
  }
}