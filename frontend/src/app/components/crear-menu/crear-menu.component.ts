import { Component } from '@angular/core';
import { MenuDia } from 'src/app/models/menu-dia';
import { Plato } from 'src/app/models/plato';
import { MenuDiaService } from 'src/app/services/menu-dia.service';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-crear-menu',
  templateUrl: './crear-menu.component.html',
  styleUrls: ['./crear-menu.component.css']
})
export class CrearMenuComponent {
  platos: Plato[] = [];
  platosSeleccionados: string[] = [];
  dia: string = '';
  constructor(private platoService: PlatoService, private menuService: MenuDiaService) { }

  ngOnInit() {
    this.obtenerPlatos();
  }

  obtenerPlatos() {
    this.platoService.getPlatos().subscribe((res) => {
      this.platos = res as Plato[];
    });
  }

  traducirTipo(tipo: string): string {
    return tipo === 'sp' ? 'Sopa' : 'Plato Fuerte';
  }

  agregarPlatoSeleccionado(id: string) {
    if (this.platosSeleccionados.includes(id)) {
      const index = this.platosSeleccionados.indexOf(id);
      this.platosSeleccionados.splice(index, 1);
    } else {
      this.platosSeleccionados.push(id);
    }
  }

  guardarMenu(){
    if(this.dia ==='')
    return alert('No se ha seleccionado el dia del menu');
    if(this.platosSeleccionados.length === 0)
    return alert('No se ha seleccionado platos para el menu');
    let menu = new MenuDia(this.dia, this.platosSeleccionados);
    this.menuService.postmenuDia(menu).subscribe((res) =>{
      return alert('Menu del dia guardado');
    })
  }
}