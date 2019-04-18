import { Component, OnInit } from '@angular/core';
import { InfoPiePaginaService } from 'src/app/Services/info-pie-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public iP: InfoPiePaginaService) { }

  ngOnInit() {
  }

}
