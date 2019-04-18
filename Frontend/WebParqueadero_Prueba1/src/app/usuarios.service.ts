import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { catchError } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private UsuariosUrl: string = '/api/Usuarios'
  constructor(private http: HttpClient) { }

  getUsuarios (): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.UsuariosUrl).pipe();    
    catchError(this.handleError);
  }

  getUsuario(Cedula: number): Observable<Usuario>{
    const url = '${this.UsuariosUrl}/${Cedula}';
    return this.http.get<Usuario>(url);
    catchError(this.handleError);
  }



  private handleError(error: any){
    console.error(error);
    return Observable.throw(error);
  }

  
}
