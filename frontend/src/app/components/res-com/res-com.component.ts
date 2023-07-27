import { Component, OnInit } from '@angular/core';
import { Coments } from 'src/app/models/coments';
import { ComentsService } from 'src/app/services/coments.service';

@Component({
  selector: 'app-res-com',
  templateUrl: './res-com.component.html',
  styleUrls: ['./res-com.component.css']
})
export class ResComComponent implements OnInit {
  comentarios: Coments[] = [];
  constructor(private comentarioService: ComentsService) { }
  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this.comentarioService.getComents().subscribe((res) => {
      this.comentarios = res as Coments[];
      this.comentarios = this.comentarios.reverse();
    })
  }

  responderComentario(id: string, correo: string, comentario: string, respuesta: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas guardar la respuesta?');
    if (confirmacion) {
      let com = new Coments(correo, comentario, respuesta);
      this.comentarioService.putComent(id, com).subscribe(
        (res) => {
          console.log('Respuesta guardada exitosamente:', res);
          return alert("La respuesta ha sido guardada exitosamente");
        },
        (error) => {
          console.error('Error al guardar la respuesta:', error);
        }
      );
    } else {
      console.log('Operación de guardar respuesta cancelada');
    }
  }

  eliminarComentario(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este comentario?');
    if (confirmacion) {
      this.comentarioService.deleteComent(id).subscribe(
        () => {
          console.log('Comentario eliminado exitosamente');
          this.obtenerComentarios();
        },
        error => {
          console.error('Error al eliminar el comentario:', error);
        }
      );
    } else {
      console.log('Operación de eliminar respuesta cancelada');
    }
  }

}
