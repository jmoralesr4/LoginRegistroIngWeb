import { Component, OnInit } from '@angular/core';
import { InfoPiePaginaService } from 'src/app/Services/info-pie-pagina.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ServicesInfo: InfoPiePaginaService) { }

  ngOnInit() {
  }

}
