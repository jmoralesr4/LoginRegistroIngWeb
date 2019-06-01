import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Usuario } from '../../Modelo/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private ApiRes: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  guardar(documento: string, tipo: string, nombre: string, apellido: string, correo: string, telefono: string, Tipov: string,
          placa: string, jornada: string, perfil: string, usuario: string, contrasena: string) {
      this.ApiRes.guardar(documento, tipo, nombre, apellido, correo, telefono, Tipov, placa, jornada, perfil, usuario, contrasena)
      .subscribe((data: Usuario) => {
        if (data) {
          this.router.navigate(['/ConsultarPago']);
        } else {
          this.router.navigate(['/ConsultarPago']);
        }
      });
  }

}
