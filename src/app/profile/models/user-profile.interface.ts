export interface UserProfile {
  idUsuario: number;
  nombreUsuario: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  telefono: string;
  correoElectronico: string;
  rol: string;
}

export interface ChangePassword {
  contrasenaActual: string;
  contrasenaNueva: string;
  confirmar: string;
}
