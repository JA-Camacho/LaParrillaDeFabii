import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentPath: string = '/'; // Ruta activa actual

  constructor(private router: Router) {
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
}
