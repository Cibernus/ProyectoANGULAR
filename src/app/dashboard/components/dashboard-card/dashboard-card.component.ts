import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa esto

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CommonModule], // ✅ Agrégalo aquí
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {
  @Input() title!: string;
  @Input() value!: string | number;       // ✅ acepta texto y número
  @Input() percentage!: number;
  @Input() trend!:string;         // ✅ validación estricta
}