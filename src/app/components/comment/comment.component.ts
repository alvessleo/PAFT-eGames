import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comentario: any;
  texto: any;
  userFoto: any;
  username: any;
  data: any;

  ngOnInit(){
    this.texto = this.comentario['texto'];
    this.userFoto = this.comentario['foto'];
    if (this.userFoto == "foto.png"){
      this.userFoto = "../../assets/abstract-user-flat-4.webp";
    }

    this.username = this.comentario['user'];
    this.data = this.comentario['data'];
  }
}
