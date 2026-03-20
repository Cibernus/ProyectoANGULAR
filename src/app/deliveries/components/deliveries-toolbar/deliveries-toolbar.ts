import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-deliveries-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries-toolbar.html',
  styleUrl: './deliveries-toolbar.css',
})
export class DeliveriesToolbar {

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