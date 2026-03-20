import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suppliers-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-toolbar.html',
  styleUrl: './suppliers-toolbar.css',
})
export class SuppliersToolbar {
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