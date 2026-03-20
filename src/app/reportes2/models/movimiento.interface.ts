export interface Movimiento {
  tipo: 'Entrada' | 'Salida';
  fecha: string;
  producto: string;
  cantidad: number;
  precio: number;
}
