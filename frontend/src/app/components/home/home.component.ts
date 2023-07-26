import { Component } from '@angular/core';
import { ComentsService } from 'src/app/services/coments.service';
import { Coments } from '../../models/coments'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private comentarioService: ComentsService, 
    private router: Router
    ){ }
  correo: string = '';
  coment: string = '';
  subirComentario() {
    if(this.coment === '')
      return alert("No hay comentario!");
    let coment = new Coments(
      this.correo,
      this.coment
    );
    this.comentarioService.postComent(coment).subscribe(
      res => {
        console.log(res);
        //alert("Hola");
        this.router.navigate(['/']);
        window.location.href = window.location.href;
      });
  }
}
