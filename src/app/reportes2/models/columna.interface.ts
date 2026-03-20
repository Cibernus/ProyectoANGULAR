export interface Columna {
  campo: string;
  titulo: string;
  tipo?: 'texto' | 'numero' | 'moneda' | 'fecha';
}
