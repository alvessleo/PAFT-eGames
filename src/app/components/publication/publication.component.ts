import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { GlobalEventEmitterService } from 'src/app/services/global-event-emitter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  dataSource!: FormGroup;

  urlLike = '../../../assets/hearth.svg';

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
    this.comentarios = this.post['comentarios'];


    this.dataSource = new FormGroup({
      id: new FormControl(""),
      comment: new FormControl("", [Validators.required]),
    })
  }

  get comment() {
    return this.dataSource.get('comment');
  }

  likeThisPost(){

    this.postService.likePosts(this.idPost).subscribe(result => {
      console.log(result);
      this.urlLike = '../../../assets/liked-icon.svg';
      GlobalEventEmitterService.get('likedPost').emit();
    })
  }

  addNewComment(evento: Event){
    evento.preventDefault();
    if (this.dataSource.valid){
      this.postService.commentPost(this.dataSource, this.idPost).subscribe(result => {
        console.log(result);
        GlobalEventEmitterService.get('comentou').emit();
      })
    } else{
      console.log("Não comentou nada");
      
    }

  }
}
