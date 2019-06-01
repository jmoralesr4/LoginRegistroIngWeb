import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pagina/header/header.component';
import { FooterComponent } from './Pagina/footer/footer.component';
import { LoginComponent } from './Pagina/login/login.component';
import { RegistroComponent } from './Pagina/registro/registro.component';
import { ConsultaUsuarioComponent } from './Pagina/consulta-usuario/consulta-usuario.component';
import { ConsultarPagoComponent } from './Pagina/consultar-pago/consultar-pago.component';
import { PagoComponent } from './Pagina/pago/pago.component';
import { AyudaComponent } from './Pagina/ayuda/ayuda.component';
import { RecordarContrasenaComponent } from './Pagina/recordar-contrasena/recordar-contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ConsultaUsuarioComponent,
    ConsultarPagoComponent,
    PagoComponent,
    AyudaComponent,
    RecordarContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
