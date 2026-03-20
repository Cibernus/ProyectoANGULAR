import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-toolbar',
  imports: [CommonModule],
  templateUrl: './users-toolbar.html',
  styleUrl: './users-toolbar.css',
})
export class UsersToolbar {
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
