import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Plato } from 'src/app/models/plato';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-crear-plato',
  templateUrl: './crear-plato.component.html',
  styleUrls: ['./crear-plato.component.css']
})
export class CrearPlatoComponent {

  nombre: string = '';
  precio: number = 0.0;
  descripcion: string = '';
  tipo: string = 'Escoga el Tipo de Plato';
  image: any;

  constructor(
    private platoService: PlatoService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result;
      };

    }
  }
  registrarPlato() {
    if (this.nombre === '')
      return alert('El nombre del plato esta vacio');
    if (this.precio === 0.0)
      return alert('El precio no ha sido establecido');
    if (this.descripcion === '')
      return alert('No se ha proporcionado una descripcion');
    if (this.tipo === "")
      return alert('No se ha escogido un tipo de plato');
    let plato = new Plato(
      this.nombre,
      this.precio,
      this.descripcion,
      this.tipo
    )
    this.platoService.postPlato(plato, this.image).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin']);
      });
  }
}