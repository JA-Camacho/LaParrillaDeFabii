export class Info {
    constructor(nombre='', horaApertura='', horaCierre='', contacto=[], direccion=''){
    this.nombre= nombre;
    this.horaApertura= horaApertura;
    this.horaCierre= horaCierre;
    this.contacto= contacto;
    this.direccion=direccion;
    }
    nombre: string;
    horaApertura: string;
    horaCierre: string;
    contacto: string[];
    direccion: string;
}
