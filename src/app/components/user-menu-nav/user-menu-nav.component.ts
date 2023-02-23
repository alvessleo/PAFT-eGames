import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-menu-nav',
  templateUrl: './user-menu-nav.component.html',
  styleUrls: ['./user-menu-nav.component.scss','../main-nav/main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuNavComponent implements OnInit{
  @Input() usuario!: any;

  constructor(private sessionService: SessionService, private router: Router, private userService: UserService) {

  }
 
  ngOnInit(): void {
    let sessionId = sessionStorage.getItem("sessionId");
    this.userService.usuarioDaSessao(sessionId).subscribe(usuario => {
      var jsonResult = JSON.parse(JSON.stringify(usuario))
      this.usuario = jsonResult['usuario'];      
    })
  }

  onClickLogout() {
    var sessionId = sessionStorage.getItem("sessionId");
    this.sessionService.logout(sessionId).subscribe(logout => {
      sessionStorage.removeItem("sessionId")
      this.router.navigate(['/login'])
    })
    

  }
}
