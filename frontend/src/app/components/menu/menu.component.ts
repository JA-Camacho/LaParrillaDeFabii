import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentPath: string = '/'; // Ruta activa actual

  constructor(
    private router: Router,
    private authservice: AuthService
    ) {
    // Suscribirse a los cambios de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url; // Actualizar la ruta activa actual
      }
    });
  }

  // Comprobar si un enlace está activo
  isActive(path: string): boolean {
    return this.currentPath === path;
  }
  //Comprobar si esta loggeado
  isLoggedIn() {
    return this.authservice.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
  }
}
