import { Component, OnInit } from '@angular/core';
import { ResAutenticar } from '../../Modelo/ResAutenticar';
import { ServiceDatos } from '../../Services/ServiceDatos';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Usuario } from '../../Modelo/usuario';
import { userInfo } from 'os';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  public loginForm: FormGroup;
  private formBuilder: FormBuilder;
  public ObjetoDatos: ResAutenticar;
  public Usr: Usuario;
  today = Date.now();
  fixedTimezone = this.today;
  public msnerror: string;
  public item: Array<ResAutenticar>;
  constructor(private Data: ServiceDatos,
              private router: Router,
              private ApiRes: AuthenticationService
              ) { }

  ngOnInit() {
    this.ObjetoDatos = this.Data.getUser();
    console.log(this.ObjetoDatos);
    if (!this.ObjetoDatos) {
      this.router.navigate(['/Login']);
    }
    console.log(this.ObjetoDatos);
  }

  pagar(email: string, banco: string, event: Event) {
    console.log(email + ' ' + banco + ' ' + event);
    this.ApiRes.usuario(this.ObjetoDatos.pago.Cedula).subscribe((user: Usuario) => {
      if (user.Nombre) {
        console.log('este es el ok ', user);
        this.Usr = user;
        if (this.Usr.email === email) {
          console.log('El mail es igual ');
          this.ApiRes.PSE(this.ObjetoDatos.pago.id_Pago).subscribe((pagoA: ResAutenticar) => {
            if (pagoA.Mensaje === 'ok') {
              console.log('este es el ok ', pagoA);
              this.Data.setDatos(pagoA);
              this.router.navigate(['/ConsultarPago']);
          } else {
            this.msnerror = pagoA.Mensaje;
          }
          });


        } else {
          this.msnerror = 'El correo no coincide con el que esta registrado';
        }
        //this.router.navigate(['/ConsultarPago']);
    } else {
      this.msnerror = user.email;
    }
    });


    // if (email.toString() === this.ObjetoDatos.Usuario.email.toString()) {
    //     console.log('Entro al if');
    //     this.msnerror = 'Transaccion en proceso';
    // } else {
    //   console.log('Entro al else');
    //   this.msnerror = 'El correo no esta registrado';
    // }
    console.log('no Entro if');

  }
}
