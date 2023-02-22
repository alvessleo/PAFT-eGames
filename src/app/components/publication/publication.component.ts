import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {
  @Input() post: any;
  postImg: any;
  title: any;
  date: any;
  username: any;
  userFoto: any;
  num_curtidas: any;

  ngOnInit(){
    this.title = this.post['title'];
    this.postImg = this.post['img'];
    this.date = this.post['data'];
    this.username = this.post['nomeUser'];
    this.num_curtidas = this.post['num_curtidas'];
    this.userFoto = this.post['fotoUser'];
  }
}
