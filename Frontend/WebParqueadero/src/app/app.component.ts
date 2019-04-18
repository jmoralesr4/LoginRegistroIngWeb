import { Component } from '@angular/core';
import { InfoPiePaginaService } from './Services/info-pie-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public piePagina: InfoPiePaginaService) { }
}
