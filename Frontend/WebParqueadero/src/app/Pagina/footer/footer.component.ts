import { Component, OnInit } from '@angular/core';
import { InfoPiePagina } from 'src/app/Interfaces/pirPagina.interfaces';
import { InfoPiePaginaService } from 'src/app/Services/info-pie-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public iP: InfoPiePaginaService) { }

  ngOnInit() {
  }

}
