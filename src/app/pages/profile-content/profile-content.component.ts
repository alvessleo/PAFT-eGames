import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentComponent {
  sessionId: any;
  usuario: any;

  follow = true

    constructor(private userService: UserService, private postService: PostService, private router: Router) {

    }

    ngOnInit(){
      this.sessionId = sessionStorage.getItem("sessionId");
      if (this.sessionId === null){
        this.router.navigate(['/']);
      }
      this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
        var jsonResult = JSON.parse(JSON.stringify(usuario))
        this.usuario = jsonResult['usuario']
      })
    }
}
