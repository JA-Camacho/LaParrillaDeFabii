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

  postPlatos(Platos: Plato) {
    return this.http.post(this.URL_API, Platos);
  }

  putPlatos(Platos: Plato) {
    return this.http.put(this.URL_API + '/$(plato._id)', Platos);
  }

  deletePlatos(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
