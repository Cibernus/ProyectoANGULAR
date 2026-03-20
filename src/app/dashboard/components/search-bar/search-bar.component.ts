import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // necesario para ngModel

@Component({
  selector: 'app-search-bar',
  standalone: true, // importante para standalone
  imports: [FormsModule], // habilita [(ngModel)] en el HTML
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  onSearch() {
    console.log('Buscando:', this.searchTerm);
    // Aquí más adelante puedes conectar con un servicio o filtrar datos
  }
}