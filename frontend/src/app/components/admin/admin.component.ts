import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  platos: Plato[] = [];

  constructor(private platoService: PlatoService) { }

  ngOnInit() {
    this.obtenerPlatos();
  }

  obtenerPlatos() {
    this.platoService.getPlatos().subscribe((res) => {
      this.platos = res as Plato[];
    })
  }
  eliminarPlato(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este plato?');
    if (confirmacion) {
      this.platoService.deletePlato(id).subscribe(
        () => {
          console.log('Plato eliminado exitosamente');
          this.obtenerPlatos();
        },
        error => {
          console.error('Error al eliminar el plato:', error);
        }
      );
    }
  }
}
