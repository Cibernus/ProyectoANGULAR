import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa CommonModule

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule], // 👈 agrégalo aquí
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  @Input() products: { name: string; units: number }[] = [];
}
