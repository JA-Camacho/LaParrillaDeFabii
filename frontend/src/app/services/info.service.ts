import { Injectable } from '@angular/core';
import { Info } from '../models/info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  selectedInfo: Info;
  readonly URL_API = 'http://192.168.100.14:3000/api/info';
  info: Info[] = [];
  constructor(private http: HttpClient) {
    this.selectedInfo = new Info();
   }
  
  getInfo() {
    return this.http.get(this.URL_API);
  }

  postInfo(Infos: Info) {
    return this.http.post(this.URL_API, Infos);
  }

  putInfo(Infos: Info) {
    return this.http.put(this.URL_API + '/$(plato._id)', Infos);
  }

  deleteInfo(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
