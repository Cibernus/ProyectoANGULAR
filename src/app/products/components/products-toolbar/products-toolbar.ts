import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-toolbar.html',
  styleUrl: './products-toolbar.css',
})
export class ProductsToolbar {

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
