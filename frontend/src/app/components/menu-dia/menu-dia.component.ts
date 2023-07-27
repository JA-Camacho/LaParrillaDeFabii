import { Component, OnInit } from '@angular/core';
import { MenuDia } from 'src/app/models/menu-dia';
import { Plato } from 'src/app/models/plato';
import { MenuDiaService } from 'src/app/services/menu-dia.service';

@Component({
  selector: 'app-menu-dia',
  templateUrl: './menu-dia.component.html',
  styleUrls: ['./menu-dia.component.css']
})
export class MenuDiaComponent implements OnInit{
  menu: MenuDia[] = [];
  platos: Plato[] = [];
  diaActual: string ='';
  constructor(public menuService: MenuDiaService){}
  ngOnInit(): void {
    this.obtenerMenuDia();
    this.obtenerDiaActual();
    console.log(this.platos);
  }

  obtenerDiaActual() {
    const diasSemana = ['D','L', 'M', 'Mi', 'J', 'V', 'S'];
    const fechaActual = new Date();
    this.diaActual = diasSemana[fechaActual.getDay()];
  }

  obtenerMenuDia(){
    this.menuService.getmenuDia().subscribe((res)=>{
      this.menuService.menu = res as MenuDia[];
      this.menuService.menu.forEach((values) =>{
        if(values.dia === this.diaActual){
          values.platos.forEach((values2) =>{
            this.platos.push(values2 as unknown as Plato);
          })
        }
      })
    })
  }
}
