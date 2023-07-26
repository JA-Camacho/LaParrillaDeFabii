export class Plato {
    constructor(nombre = '', precio = 0, descripcion = '', tipo = '', foto = '', _id = '') {
        this._id = _id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.foto = foto;
    }
    _id: string;
    nombre: string;
    precio: number;
    descripcion: string;
    tipo: string;
    foto: string;
}
