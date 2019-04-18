import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPiePagina } from '../Interfaces/pirPagina.interfaces';
import { Usuario } from '../Modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class InfoPiePaginaService {

  info: InfoPiePagina = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.CargarUsuarios();
    this.http.get('assets/Data/Data-PiePagina.json')
    .subscribe((resp: InfoPiePagina) => {
      this.info = resp;
      console.log(resp);
    });
  }

  private CargarUsuarios() {
    this.http.get<Usuario[]>('http://localhost:18774/api/Usuarios')
    .subscribe( resp => {
      console.log(resp);
    });
  }
}
