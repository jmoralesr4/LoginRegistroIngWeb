import { Usuario } from './usuario';
import { Pago } from './Pago';

// export class ResAutenticar {
//     // tslint:disable-next-line:ban-types
//     Codigo: String;
//     // tslint:disable-next-line:ban-types
//     Mensaje: String;
//     pago: Pago;
// }


export interface ResAutenticar {
  Codigo: string;
  Mensaje: string;
  pago: Pago;
  Usuario: Usuario;
}

