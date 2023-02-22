import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feed-content',
  templateUrl: './feed-content.component.html',
  styleUrls: ['./feed-content.component.scss']
})
export class FeedContentComponent {
  sessionId: any;
  nome!: string;
  username!: string;

    constructor(private userService: UserService) {
    }

    ngOnInit(){
      this.sessionId = sessionStorage.getItem("sessionId");
      this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
        var jsonResult = JSON.parse(JSON.stringify(usuario))
        this.nome = jsonResult['usuario']['nome']
        this.username = jsonResult['usuario']['username']
      })
    }

}
