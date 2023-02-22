import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentComponent {
  sessionId: any;
  nome!: string;
  username!: string;
  bio!: string;
  fotoUrl: any;

  follow = true

    constructor(private userService: UserService, private postService: PostService) {

    }

    ngOnInit(){
      this.sessionId = sessionStorage.getItem("sessionId");
      this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
        var jsonResult = JSON.parse(JSON.stringify(usuario))
        this.nome = jsonResult['usuario']['nome']
        this.username = jsonResult['usuario']['username']
        this.bio = jsonResult['usuario']['biografia']
        this.fotoUrl = jsonResult['usuario']['foto']

        
      })
    }
}
