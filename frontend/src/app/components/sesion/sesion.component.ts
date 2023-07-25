import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  admin = {
    usuario: '',
    contra: ''
  };
  constructor(
    private authService: AuthService,
    private router: Router
    ) { };
  ngOnInit(): void {

  }
 
  signIn() {
    console.log(this.admin);
    this.authService.signIn(this.admin).subscribe(
      (res : any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/admin']);
      });
  }
}
