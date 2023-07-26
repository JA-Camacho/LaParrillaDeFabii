import { Injectable } from '@angular/core';
import { Coments } from '../models/coments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {
  selectedComents: Coments;
  readonly URL_API = 'http://192.168.100.14:3000/api/coment';
  coments: Coments[] = [];
  constructor(private http: HttpClient) {
    this.selectedComents = new Coments();
   }
  
  getComents() {
    return this.http.get(this.URL_API);
  }

  postComent(Coment: Coments) {
    return this.http.post(this.URL_API, Coment);
  }

  putComent(Coment: Coments) {
    return this.http.put(this.URL_API + '/$(plato._id)', Coment);
  }

  deleteComent(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
