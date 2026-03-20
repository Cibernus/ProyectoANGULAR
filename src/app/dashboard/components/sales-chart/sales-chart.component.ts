import { Component, Input, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Chart, ChartConfiguration,
  BarController, BarElement,
  CategoryScale, LinearScale,
  Title, Tooltip, Legend
} from 'chart.js';

// Registrar solo lo necesario para barras
Chart.register(
  BarController, BarElement,
  CategoryScale, LinearScale,
  Title, Tooltip, Legend
);

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements AfterViewInit {
  @Input() data: { day: string; value: number }[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // 👈 evita ejecución en SSR

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: this.data.map(item => item.day),
        datasets: [{
          label: 'Ventas Diarias',
          data: this.data.map(item => item.value),
          backgroundColor: [
            '#87CEED', '#0000FF', '#87CEED',
            '#0000FF', '#87CEED', '#0000FF', '#87CEED'
          ], // 👈 alterna azul claro y azul fuerte
          barThickness: 13, // 👈 barras más delgadas
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false, // 👈 oculta cuadrícula vertical
              color: 'rgba(0,0,0,0.3)',
              lineWidth: 0.3
            }
          },
          y: {
            beginAtZero: true
          }
        },
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