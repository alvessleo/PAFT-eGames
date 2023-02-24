import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { GlobalEventEmitterService } from 'src/app/services/global-event-emitter.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {
  @Input() post: any;
  idPost: any;
  postImg: any;
  title: any;
  date: any;
  username: any;
  userFoto: any;
  num_curtidas: any;
  num_comments: any;
  comentarios: any;

  constructor(private postService: PostService){}

  ngOnInit(){
    this.title = this.post['title'];
    this.postImg = this.post['img'];
    this.date = this.post['data'];
    this.username = this.post['nomeUser'];
    this.num_curtidas = this.post['num_curtidas'];
    this.userFoto = this.post['fotoUser'];
    this.idPost = this.post['idpost'];
    this.num_comments = this.post['num_comments'];
    this.comentarios = this.post['comentarios']
  }

  likeThisPost(){
    this.postService.likePosts(this.idPost).subscribe(result => {
      console.log(result);
      GlobalEventEmitterService.get('likedPost').emit();
    })
  }
}
