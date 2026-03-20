import { Component, Input, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration, DoughnutController, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { CommonModule } from '@angular/common';

// Registrar módulos necesarios para doughnut
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

@Component({
  selector: 'app-product-percentage-chart',
  standalone: true,
  templateUrl: './product-percentage-chart.component.html',
  styleUrls: ['./product-percentage-chart.component.css'],
  imports: [CommonModule]
})
export class ProductPercentageChartComponent implements AfterViewInit {
  @Input() data: { name: string; value: number }[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // 👈 evita ejecución en SSR

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto 2D');
      return;
    }

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: this.data.length
          ? this.data.map(item => item.name)
          : ["Azucar", "Arroz", "Aceite", "Harina"], // 👈 valores por defecto
        datasets: [{
          label: 'Porcentaje de Ventas',
          data: this.data.length
            ? this.data.map(item => item.value)
            : [6, 39, 20, 10], // 👈 valores por defecto
          backgroundColor: [
            'rgba(200, 162, 200, 1)', // morado claro
            'rgba(0, 0, 0, 1)',       // negro
            'rgba(135, 206, 250, 1)', // azul claro
            'rgba(0, 255, 127, 1)'    // verde
          ],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            labels: {
              boxWidth: 0,   // 👈 oculta el cuadrito de color
              color: '#000'  // 👈 texto de la leyenda en negro
            }
          }
        }
      }
    };

    new Chart(ctx, config);
  }
}