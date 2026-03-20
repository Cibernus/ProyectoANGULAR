import { Injectable } from '@angular/core';
import { Movimiento } from '../models/movimiento.interface';
import { Producto } from '../models/producto.interface';
import { Stock } from '../models/stock.interface';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  // ==================== DATOS ESTÁTICOS ====================

  private movimientos: Movimiento[] = [
    {
      tipo: 'Entrada',
      fecha: '15/12/2026',
      producto: 'Aceite el faro',
      cantidad: 100,
      precio: 4000.0,
    },
    {
      tipo: 'Entrada',
      fecha: '18/11/2026',
      producto: 'Detergente Ariel',
      cantidad: 200,
      precio: 5000.0,
    },
    {
      tipo: 'Entrada',
      fecha: '18/11/2026',
      producto: 'Fideos La Moderna',
      cantidad: 150,
      precio: 3000.0,
    },
    { tipo: 'Entrada', fecha: '16/11/2026', producto: 'Jabón Zote', cantidad: 250, precio: 2000.0 },
    {
      tipo: 'Salida',
      fecha: '16/11/2026',
      producto: 'Galletas Gamesa',
      cantidad: 300,
      precio: 4500.0,
    },
    {
      tipo: 'Entrada',
      fecha: '17/11/2026',
      producto: 'Suavizante Downy',
      cantidad: 100,
      precio: 3500.0,
    },
    {
      tipo: 'Entrada',
      fecha: '17/11/2026',
      producto: 'Fritos Sabritas',
      cantidad: 200,
      precio: 6000.0,
    },
    {
      tipo: 'Salida',
      fecha: '10/11/2026',
      producto: 'Limpiador Pine-Sol',
      cantidad: 150,
      precio: 5500.0,
    },
    { tipo: 'Entrada', fecha: '01/11/2026', producto: 'Leche Lala', cantidad: 100, precio: 8000.0 },
  ];

  private productos: Producto[] = [
    {
      nombre: 'Galletas Marias',
      stock: 300,
      valorTotal: 12000.0,
      costoTotal: 6000.0,
      gananciaTotal: 6000.0,
    },
    {
      nombre: 'Sabritas Doritos Dinamita',
      stock: 150,
      valorTotal: 22500.0,
      costoTotal: 11250.0,
      gananciaTotal: 11250.0,
    },
    {
      nombre: "Sabritas Cheetos Flamin' Hot",
      stock: 180,
      valorTotal: 21600.0,
      costoTotal: 10800.0,
      gananciaTotal: 10800.0,
    },
    {
      nombre: 'Sabritas Ruffles Limon',
      stock: 220,
      valorTotal: 44000.0,
      costoTotal: 22000.0,
      gananciaTotal: 22000.0,
    },
    {
      nombre: 'Bonafont Agua',
      stock: 300,
      valorTotal: 27000.0,
      costoTotal: 13500.0,
      gananciaTotal: 13500.0,
    },
    {
      nombre: 'Vinegar Alacena',
      stock: 100,
      valorTotal: 5000.0,
      costoTotal: 2500.0,
      gananciaTotal: 2500.0,
    },
    {
      nombre: 'Herdes Chiles',
      stock: 150,
      valorTotal: 7500.0,
      costoTotal: 3750.0,
      gananciaTotal: 3750.0,
    },
    {
      nombre: 'La Costeña Frijoles',
      stock: 200,
      valorTotal: 10000.0,
      costoTotal: 5000.0,
      gananciaTotal: 5000.0,
    },
    {
      nombre: 'Cemex Cemento',
      stock: 50,
      valorTotal: 20000.0,
      costoTotal: 10000.0,
      gananciaTotal: 10000.0,
    },
  ];

  private stock: Stock[] = [
    {
      producto: 'Mayonesa',
      stockActual: 250,
      ventas: 0,
      valorTotal: 16500.0,
      rotacion: 0,
      nivelDeRotacion: 'Lento',
    },
    {
      producto: 'Jamon Fud',
      stockActual: 250,
      ventas: 0,
      valorTotal: 19000.0,
      rotacion: 0,
      nivelDeRotacion: 'Lento',
    },
    {
      producto: 'Gel antibacterial',
      stockActual: 250,
      ventas: 0,
      valorTotal: 1000.0,
      rotacion: 0,
      nivelDeRotacion: 'Lento',
    },
    {
      producto: 'Doritos Diablo',
      stockActual: 250,
      ventas: 0,
      valorTotal: 20000.0,
      rotacion: 0,
      nivelDeRotacion: 'Lento',
    },
    {
      producto: 'Pepsi',
      stockActual: 100,
      ventas: 150,
      valorTotal: 9000.0,
      rotacion: 1.5,
      nivelDeRotacion: 'Rápido',
    },
    {
      producto: 'Coca-Cola',
      stockActual: 100,
      ventas: 120,
      valorTotal: 8750.0,
      rotacion: 1.2,
      nivelDeRotacion: 'Rápido',
    },
    {
      producto: 'Nescafé',
      stockActual: 200,
      ventas: 20,
      valorTotal: 15000.0,
      rotacion: 0.1,
      nivelDeRotacion: 'Medio',
    },
    {
      producto: 'Colgate',
      stockActual: 150,
      ventas: 25,
      valorTotal: 7500.0,
      rotacion: 0.167,
      nivelDeRotacion: 'Medio',
    },
    {
      producto: 'Danone',
      stockActual: 250,
      ventas: 40,
      valorTotal: 10000.0,
      rotacion: 0.16,
      nivelDeRotacion: 'Medio',
    },
    {
      producto: 'Gatorade',
      stockActual: 220,
      ventas: 15,
      valorTotal: 11000.0,
      rotacion: 0.068,
      nivelDeRotacion: 'Lento',
    },
  ];

  // ==================== MÉTODOS PARA OBTENER DATOS ====================

  getMovimientos(): Movimiento[] {
    return [...this.movimientos];
  }

  getProductos(): Producto[] {
    return [...this.productos];
  }

  getStock(): Stock[] {
    return [...this.stock];
  }

  // ==================== MÉTODOS DE FILTRADO ====================

  filtrarMovimientosPorFecha(movimientos: Movimiento[], filtro: string): Movimiento[] {
    const fechaHoy = new Date();

    return movimientos.filter((mov) => {
      const [dia, mes, anio] = mov.fecha.split('/');
      const fechaMovimiento = new Date(parseInt(anio), parseInt(mes) - 1, parseInt(dia));

      switch (filtro) {
        case 'hoy':
          return fechaMovimiento.toDateString() === fechaHoy.toDateString();

        case 'ayer':
          const fechaAyer = new Date(fechaHoy);
          fechaAyer.setDate(fechaAyer.getDate() - 1);
          return fechaMovimiento.toDateString() === fechaAyer.toDateString();

        case 'semana':
          const fechaSemana = new Date(fechaHoy);
          fechaSemana.setDate(fechaSemana.getDate() - 7);
          return fechaMovimiento >= fechaSemana && fechaMovimiento <= fechaHoy;

        case 'mes':
          const fechaMes = new Date(fechaHoy);
          fechaMes.setMonth(fechaMes.getMonth() - 1);
          return fechaMovimiento >= fechaMes && fechaMovimiento <= fechaHoy;

        default:
          return true;
      }
    });
  }

  filtrarMovimientosPorTipo(movimientos: Movimiento[], tipo: string): Movimiento[] {
    if (tipo === 'todos' || tipo === 'tipo') {
      return movimientos;
    }

    const tipoMap: { [key: string]: 'Entrada' | 'Salida' } = {
      entrada: 'Entrada',
      entradas: 'Entrada',
      salida: 'Salida',
      salidas: 'Salida',
    };

    const tipoFiltrado = tipoMap[tipo.toLowerCase()];
    return movimientos.filter((mov) => mov.tipo === tipoFiltrado);
  }

  // ==================== MÉTODOS DE ORDENAMIENTO ====================

  ordenarProductos(productos: Producto[], criterio: string): Producto[] {
    const productosOrdenados = [...productos];

    switch (criterio) {
      case 'mayor-ganancia':
        return productosOrdenados.sort((a, b) => b.gananciaTotal - a.gananciaTotal);

      case 'menor-ganancia':
        return productosOrdenados.sort((a, b) => a.gananciaTotal - b.gananciaTotal);

      case 'mayor-valor-total':
        return productosOrdenados.sort((a, b) => b.valorTotal - a.valorTotal);

      case 'menor-valor-total':
        return productosOrdenados.sort((a, b) => a.valorTotal - b.valorTotal);

      case 'mayor-costo-total':
        return productosOrdenados.sort((a, b) => b.costoTotal - a.costoTotal);

      case 'menor-costo-total':
        return productosOrdenados.sort((a, b) => a.costoTotal - b.costoTotal);

      default:
        return productosOrdenados;
    }
  }

  ordenarStock(stock: Stock[], criterio: string): Stock[] {
    const stockOrdenado = [...stock];

    switch (criterio) {
      case 'a-z':
        return stockOrdenado.sort((a, b) => a.producto.localeCompare(b.producto));

      case 'z-a':
        return stockOrdenado.sort((a, b) => b.producto.localeCompare(a.producto));

      case 'mayor-valor':
        return stockOrdenado.sort((a, b) => b.valorTotal - a.valorTotal);

      case 'menor-valor':
        return stockOrdenado.sort((a, b) => a.valorTotal - b.valorTotal);

      case 'mayor-stock':
        return stockOrdenado.sort((a, b) => b.stockActual - a.stockActual);

      case 'menor-stock':
        return stockOrdenado.sort((a, b) => a.stockActual - b.stockActual);

      case 'mayor-rotacion':
        return stockOrdenado.sort((a, b) => b.ventas - a.ventas);

      case 'menor-rotacion':
        return stockOrdenado.sort((a, b) => a.ventas - b.ventas);

      default:
        return stockOrdenado;
    }
  }

  // ==================== BÚSQUEDA ====================

  buscarEnDatos(datos: any[], termino: string): any[] {
    if (!termino.trim()) {
      return datos;
    }

    const terminoLower = termino.toLowerCase();

    return datos.filter((item) => {
      return Object.values(item).some((valor) =>
        String(valor).toLowerCase().includes(terminoLower),
      );
    });
  }
}
