import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_API = 'http://192.168.100.14:3000/api/admin/auth';
  constructor(private http: HttpClient) { 

  }
  signIn(admin: any){
    return this.http.post(this.URL_API, admin)
  }
}
