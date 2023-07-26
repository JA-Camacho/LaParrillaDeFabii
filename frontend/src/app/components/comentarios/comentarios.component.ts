import { Component } from '@angular/core';
import { Coments } from 'src/app/models/coments';
import { ComentsService } from 'src/app/services/coments.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comentarios: Coments[] = [];

  constructor(private comentarioService: ComentsService) { }

  ngOnInit() {
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this.comentarioService.getComents().subscribe((res) => {
        this.comentarios = res as Coments[];
      }
    );
  }
}
