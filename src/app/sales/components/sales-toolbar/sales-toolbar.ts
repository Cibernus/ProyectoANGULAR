import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-toolbar.html',
  styleUrl: './sales-toolbar.css',
})
export class SalesToolbar {
  @Output() search = new EventEmitter<string>();
  @Output() nuevaVenta = new EventEmitter<void>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }

  onNuevaVenta(): void {
    this.nuevaVenta.emit();
  }
}