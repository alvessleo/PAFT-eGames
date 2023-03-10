import { Component, OnInit } from '@angular/core';
import { GroupService } from './services/group.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'eGames-angular';

  constructor(private userService: UserService, private groupService: GroupService) {

  }

  ngOnInit(): void {
    this.userService.recuperarTodosUsuarios().subscribe(usuarios => {
      console.log('usuarios recuperados')
    })
    
  }

}
