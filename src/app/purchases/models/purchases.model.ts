export type TipoCompra = 'pedido' | 'directa';
export type EstadoCompra = 'pendiente' | 'completada' | 'cancelada';
export type FormaPago = 'efectivo' | 'transferencia' | 'cheque' | 'credito';

export interface Compra {
  id?: string;
  fechaCompra: string;
  tipoCompra: TipoCompra;
  estado: EstadoCompra;
  total: number;
  formaPago: FormaPago;
  idEmpleado: string;

  // Solo si tipoCompra === 'pedido'
  folio?: string;
  facturaProveedor?: string;

  // Solo si tipoCompra === 'directa'
  referenciaPago?: string;
  documentoReferencia?: string;
  origen?: string;
}
