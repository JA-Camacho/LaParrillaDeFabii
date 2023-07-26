import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plato } from '../models/plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  selectedPlato: Plato;
  readonly URL_API = 'http://192.168.100.14:3000/api/plato';
  plato: Plato[] = [];
  constructor(private http: HttpClient) {
    this.selectedPlato = new Plato();
   }
  
  getPlatos() {
    return this.http.get(this.URL_API);
  }

  postPlato(plato: Plato, foto: File) {
    const fd = new FormData();
    fd.append('nombre', plato.nombre);
    fd.append('precio', plato.precio.toString());
    fd.append('descripcion', plato.descripcion);
    fd.append('tipo', plato.tipo);
    fd.append('foto', foto);
    console.log(foto);
    return this.http.post(this.URL_API, fd);
  }

  putPlato(plato: Plato) {
    return this.http.put(this.URL_API + '/$(plato._id)', plato);
  }

  deletePlato(_id: string) {
    console.log(_id);
    return this.http.delete(this.URL_API + '/' + _id);
  }
}
