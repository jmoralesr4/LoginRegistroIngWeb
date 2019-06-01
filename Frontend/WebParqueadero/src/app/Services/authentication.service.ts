import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/usuario';
// import { Usuario } from '../Interfaces/IUsuario.interfaces';
import { promise } from 'protractor';
import { Promise } from 'q';
import { ResAutenticar } from '../Modelo/ResAutenticar';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Pago } from '../Modelo/Pago';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<ResAutenticar>;
    private TodaInfo = 'todos';
    private dsa: Usuario;
    // private http: HttpClient;
    public currentUser: Observable<ResAutenticar>;
    private baseUrl = 'http://localhost:18774/api/';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<ResAutenticar>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

//     login(username: string, password: string) {
//        alert('sa');
//        console.log('dsad');
//        this.http.get<Usuario[]>('http://localhost:18774/api/Usuarios')
//        .subscribe( resp => {
//         console.log(resp);
//     });
//    }

login(username: string, password: string) {
     return this.http.get(this.baseUrl + 'usuarios?usuario=' + username + '&' + 'contrasena=' + password);
}

usuario(cedula: string) {
    console.log(this.baseUrl + 'usuarios?cedula=' + cedula);
    return this.http.get(this.baseUrl + 'usuarios?cedula=' + cedula);
}

PSE(tiquete: number) {
    console.log('Tiquete ', tiquete);
    return this.http.get(this.baseUrl + 'usuarios?tiquete=' + tiquete);
}

guardar(documento: string, tipo: string, nombre: string, apellido: string, correo: string, telefono: string, Tipov: string,
        placa: string, jornada: string, perfil: string, usuario: string, constrasena: string) {
    return this.http.get(this.baseUrl + 'usuarios?documento=' + documento + '&tipo=' + tipo + '&nombre=' + nombre +
                         '&apellido=' + apellido + '&correo=' + correo + '&telefono=' + telefono + '&Tipov=' + Tipov +
                         '&placa=' + placa + '&jornada=' + jornada + '&perfil=' + perfil + '&usuario=' + usuario +
                         '&contrasena=' + constrasena);
}

EnvioCorreo(correo: string) {
    return this.http.get(this.baseUrl + 'usuarios?correo=' + correo);
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
