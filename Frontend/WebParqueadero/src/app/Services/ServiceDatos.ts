import { Injectable } from '@angular/core';
import { ResAutenticar } from '../Modelo/ResAutenticar';

@Injectable({
    providedIn: 'root'
})
export class ServiceDatos {
    private dataUser: ResAutenticar;
    constructor() { }

    setDatos(OPago: ResAutenticar) {
        this.dataUser = OPago;
        console.log('Set ', OPago);
    }

    getUser() {
        console.log('Get ', this.dataUser);
        return this.dataUser;
    }

    getEmail() {
        console.log('email');
        return this.dataUser.Usuario.email;
    }
}
