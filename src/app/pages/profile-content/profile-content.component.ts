import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

  

    constructor(private userService: UserService) {

    }

    ngOnInit(){
      this.sessionId = sessionStorage.getItem("sessionId");
      this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
        var jsonResult = JSON.parse(JSON.stringify(usuario))
        this.nome = jsonResult['usuario']['nome']
        this.username = jsonResult['usuario']['username']
        this.bio = jsonResult['usuario']['biografia']
      })
    }
}
