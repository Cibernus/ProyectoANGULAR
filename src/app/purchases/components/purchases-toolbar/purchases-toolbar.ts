import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-compras-toolbar',
  imports: [CommonModule],
  templateUrl: './purchases-toolbar.html',
  styleUrl: './purchases-toolbar.css',
})
export class ComprasToolbar {
  @Output() search = new EventEmitter<string>();
  @Output() add = new EventEmitter<void>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

  onAdd() {
    this.add.emit();
  }
}
