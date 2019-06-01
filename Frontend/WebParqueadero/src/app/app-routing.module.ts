import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pagina/login/login.component';
import { AyudaComponent } from './Pagina/ayuda/ayuda.component';
import { RegistroComponent } from './Pagina/registro/registro.component';
import { ConsultaUsuarioComponent } from './Pagina/consulta-usuario/consulta-usuario.component';
import { ConsultarPagoComponent } from './Pagina/consultar-pago/consultar-pago.component';
import { PagoComponent } from './Pagina/pago/pago.component';
import { RecordarContrasenaComponent } from './Pagina/recordar-contrasena/recordar-contrasena.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Ayuda', component: AyudaComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'ConsultarUsuario', component: ConsultaUsuarioComponent },
  { path: 'ConsultarPago', component: ConsultarPagoComponent },
  { path: 'Pago', component: PagoComponent },
  { path: 'RecordarContrasena', component: RecordarContrasenaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
