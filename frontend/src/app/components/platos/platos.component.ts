import { Component, OnInit } from '@angular/core';
import { Plato } from '../../models/plato';
import { PlatoService } from '../../services/plato.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit{
  constructor(
    public platoService: PlatoService
  ) {}
  ngOnInit(): void {
    this.getPlatos();
    
  }

  getPlatos(){
    this.platoService.getPlatos().subscribe((res) => {
      this.platoService.plato = res as Plato[];
    });
    
  }
}
