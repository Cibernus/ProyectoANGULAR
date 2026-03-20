import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserProfile, ChangePassword } from '../models/user-profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/api'; // TODO: cambiar por tu URL real

  constructor(private http: HttpClient) {}

  getPerfil(idUsuario: number): Observable<UserProfile> {
    // TODO: cuando tengas API, reemplaza el of() por:
    // return this.http.get<UserProfile>(`${this.apiUrl}/usuarios/${idUsuario}`);
    return of({
      idUsuario: 1,
      nombreUsuario: 'angela.lopez',
      apellidoPaterno: 'López',
      apellidoMaterno: 'García',
      telefono: '5551234567',
      correoElectronico: 'angela@example.com',
      rol: 'Administrador',
    });
  }

  updatePerfil(idUsuario: number, datos: Partial<UserProfile>): Observable<UserProfile> {
    // TODO: return this.http.put<UserProfile>(`${this.apiUrl}/usuarios/${idUsuario}`, datos);
    return of(datos as UserProfile);
  }

  changePassword(idUsuario: number, datos: ChangePassword): Observable<{ mensaje: string }> {
    // TODO: return this.http.patch<{ mensaje: string }>(`${this.apiUrl}/usuarios/${idUsuario}/contrasena`, datos);
    return of({ mensaje: 'Contraseña actualizada correctamente.' });
  }
}
