import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-recordar-contrasena',
  templateUrl: './recordar-contrasena.component.html',
  styleUrls: ['./recordar-contrasena.component.css']
})
export class RecordarContrasenaComponent implements OnInit {
  public respuesta: string;
  constructor(private ApiRes: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  enviar(correo: string){
    this.ApiRes.EnvioCorreo(correo).subscribe((envio: string) => {
      if (envio === 'Exitoso')
      {
        this.respuesta = 'Mensaje enviado';
        //this.router.navigate([]);
      } else {
        this.respuesta = envio;
      }
    });

  }

}
