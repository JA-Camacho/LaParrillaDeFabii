import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedAdmin: Admin;
  readonly URL_API = 'http://192.168.100.14:3000/api/admin';
  info: Admin[] = [];
  constructor(private http: HttpClient) {
    this.selectedAdmin = new Admin();
   }
  
  getAdmin() {
    return this.http.get(this.URL_API);
  }

  postAdmin(Admins: Admin) {
    return this.http.post(this.URL_API, Admins);
  }

  putAdmin(Admins: Admin) {
    return this.http.put(this.URL_API + '/$(plato._id)', Admins);
  }

  deleteAdmin(_id: string) {
    return this.http.delete(this.URL_API + '/${_id}');
  }
}
