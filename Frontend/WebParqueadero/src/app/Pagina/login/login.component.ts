import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../Services/authentication.service';
import { AlertService } from '../../Services/alert.service';
import { HttpClient } from '@angular/common/http';
import { ResAutenticar } from '../../Modelo/ResAutenticar';
import { ConsultarPagoComponent } from '../consultar-pago/consultar-pago.component';
import { ServiceDatos } from '../../Services/ServiceDatos';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    public resultado: string;

    private formBuilder: FormBuilder;
    private route: ActivatedRoute;
    private authenticationService: AuthenticationService;
    private alertService: AlertService;
    loginService: any;


    constructor(public objService: AuthenticationService,
                public SaveData: ServiceDatos,
                private router: Router,
                public http: HttpClient
      ) {}

    ngOnInit() {
      // alert('OnInit');
      this.loginForm = this.formBuilder.group({
          usuario: ['', Validators.required],
          contrasena: ['', Validators.required]
      });
      // reset login status
      this.authenticationService.logout();
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    public logIn(username: string, password: string, event: Event) {
      event.preventDefault(); // Avoid default action for the submit button of the login form
      this.loading = true;
      // Calls service to login user to the api rest
      this.objService.login(username, password).subscribe((data: ResAutenticar) => {
        if (data.Mensaje === 'ok') {
            console.log('este es el ok ', data);
            this.SaveData.setDatos(data);
            this.router.navigate(['/ConsultarPago']);
        } else {
          this.resultado = data.Mensaje;
        }
     });
    }
  navigate() {
    throw new Error('Method not implemented.');
  }
}
