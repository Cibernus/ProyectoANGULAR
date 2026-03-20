export interface Stock {
  producto: string;
  stockActual: number;
  ventas: number;
  valorTotal: number;
  rotacion: number;
  nivelDeRotacion: 'Lento' | 'Medio' | 'Rápido';
}
