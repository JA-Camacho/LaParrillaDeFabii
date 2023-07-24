export class Plato {
    constructor(nombre = '', precio = 0, descripcion = '', tipo = '', foto = '') {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.foto = foto;
    }
    nombre: string;
    precio: number;
    descripcion: string;
    tipo: string;
    foto: string;
}
