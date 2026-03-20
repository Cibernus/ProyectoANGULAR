import { Component, Input, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Registrar módulos necesarios para barras
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

@Component({
  selector: 'app-monthly-sales-chart',
  standalone: true,
  templateUrl: './monthly-sales-chart.component.html',
  styleUrls: ['./monthly-sales-chart.component.css']
})
export class MonthlySalesChartComponent implements AfterViewInit {
  @Input() data: { month: string; value: number }[] = [];
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // 👈 evita ejecución en SSR

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: this.data.map(item => item.month),
        datasets: [{
          label: 'Ventas por Mes',
          data: this.data.map(item => item.value),
          backgroundColor: [
            '#87CEED', '#0000FF', '#87CEED', '#0000FF',
            '#87CEED', '#0000FF', '#87CEED', '#0000FF',
            '#87CEED', '#0000FF', '#87CEED', '#0000FF'
          ],
          barThickness: 13,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
              color: 'rgba(0, 0, 0, 0.3)',
              lineWidth: 0.3
            }
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              boxWidth: 0,
              color: "#ffffff"
            }
          }
        }
      }
    };

    new Chart(ctx, config);
  }
}
