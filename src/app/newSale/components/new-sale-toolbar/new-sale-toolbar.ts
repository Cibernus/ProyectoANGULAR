import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-sale-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-sale-toolbar.html',
  styleUrl: './new-sale-toolbar.css',
})
export class NewSaleToolbar {
  @Output() search = new EventEmitter<string>();
  @Output() scan = new EventEmitter<void>();

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }

  onScan(): void {
    this.scan.emit();
  }
}