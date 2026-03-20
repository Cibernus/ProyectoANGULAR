import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-orders-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-toolbar.html',
  styleUrl: './orders-toolbar.css',
})
export class OrdersToolbar {

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