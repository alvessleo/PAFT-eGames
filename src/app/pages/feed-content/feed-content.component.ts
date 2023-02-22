import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, RouterLink } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { GlobalEventEmitterService } from 'src/app/services/global-event-emitter.service';

@Component({
  selector: 'app-feed-content',
  templateUrl: './feed-content.component.html',
  styleUrls: ['./feed-content.component.scss']
})
export class FeedContentComponent {
  sessionId: any;
  nome!: string;
  username!: string;
  publications: any;

    constructor(private userService: UserService, private router: Router, private postService: PostService) {
    }

  ngOnInit(){
    this.sessionId = sessionStorage.getItem("sessionId");
    if (this.sessionId == "unset"){
      this.router.navigate(['/']);
    }
    this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
      var jsonResult = JSON.parse(JSON.stringify(usuario))
      this.nome = jsonResult['usuario']['nome'];
      this.username = jsonResult['usuario']['username'];
      let userId = jsonResult['usuario']['idUsuario'];
      sessionStorage.setItem("idUsuario", userId);
    })

    this.postService.getPosts().subscribe(posts => {
      this.publications = posts;
    })

    GlobalEventEmitterService.get('novoPost').subscribe(data => {
      this.postService.getPosts().subscribe(posts => {
        this.publications = posts;
      })
    })
  }

  

}
