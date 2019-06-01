import { Component, OnInit } from '@angular/core';
import { ResAutenticar } from '../../Modelo/ResAutenticar';
import { LoginComponent } from '../login/login.component';
import { ServiceDatos } from '../../Services/ServiceDatos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-pago',
  templateUrl: './consultar-pago.component.html',
  styleUrls: ['./consultar-pago.component.css']
})
export class ConsultarPagoComponent implements OnInit {
  public ObjetoDatos: ResAutenticar;
  today = Date.now();
  fixedTimezone = this.today;

  constructor(private Data: ServiceDatos, private router: Router) { }

  ngOnInit() {
     this.ObjetoDatos = this.Data.getUser();
     if (!this.ObjetoDatos) {
      this.router.navigate(['/Login']);
     }
     console.log(this.ObjetoDatos);
  }
  Pagar(){
    console.log('Consulta');
    this.Data.setDatos(this.ObjetoDatos);
    this.router.navigate(['/Pago']);
  }
}
