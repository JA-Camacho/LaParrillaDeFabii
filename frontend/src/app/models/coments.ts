export class Coments {
    constructor(correo = '', comentario = '', respuesta = '', _id='') {
        this._id = _id;
        this.correo = correo;
        this.comentario = comentario;
        this.respuesta = respuesta;
    }
    _id : string;
    correo: string;
    comentario: string;
    respuesta: string;
}


