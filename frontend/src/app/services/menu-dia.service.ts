import { Injectable } from '@angular/core';
import { MenuDia } from '../models/menu-dia';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuDiaService {

  selectedmenuDia: MenuDia;
  readonly URL_API = 'http://192.168.100.14:3000/api/menu';
  info: MenuDia[] = [];
  constructor(private http: HttpClient) {
    this.selectedmenuDia = new MenuDia();
   }
  
  getmenuDia() {
    return this.http.get(this.URL_API);
  }

  postmenuDia(menuDias: MenuDia) {
    return this.http.post(this.URL_API, menuDias);
  }

  putmenuDia(menuDias: MenuDia) {
    return this.http.put(this.URL_API + '/$(plato._id)', menuDias);
  }

  deletemenuDia(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}