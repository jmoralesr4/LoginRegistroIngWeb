import { Usuario } from './usuario';
export interface Pago {
    id_Pago?: number;
    Tarifa?: any;
    Cedula?: any;
    Fecha?: any;
    HoraIngreso?: any;
    Total?: any;
    EstadoTx?: any;
    // Usuario?: Usuario;
}

