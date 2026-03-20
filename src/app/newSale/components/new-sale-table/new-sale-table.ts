import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SaleItem {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  selector: 'app-new-sale-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-sale-table.html',
  styleUrl: './new-sale-table.css',
})
export class NewSaleTable {
  @Input() items: SaleItem[] = [];
  @Output() itemsChange = new EventEmitter<SaleItem[]>();

  increaseQuantity(item: SaleItem): void {
    item.cantidad++;
    this.itemsChange.emit(this.items);
  }

  decreaseQuantity(item: SaleItem): void {
    if (item.cantidad > 1) {
      item.cantidad--;
      this.itemsChange.emit(this.items);
    }
  }

  removeItem(item: SaleItem): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.itemsChange.emit(this.items);
    }
  }
}