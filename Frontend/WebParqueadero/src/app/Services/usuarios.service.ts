import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private serviUsuarioUrl = '';
  constructor(public http: HttpClient) { }

  private CargarUsuarios() {
    this.http.get<Usuario[]>('http://localhost:18774/api/Usuarios')
    .subscribe( resp => {
      console.log(resp);
    });
  }
}
