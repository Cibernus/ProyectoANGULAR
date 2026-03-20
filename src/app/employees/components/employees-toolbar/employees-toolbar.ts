import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-toolbar',
  imports: [CommonModule],
  templateUrl: './employees-toolbar.html',
  styleUrl: './employees-toolbar.css',
})
export class EmployeesToolbar {
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
