import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-user-menu-nav',
  templateUrl: './user-menu-nav.component.html',
  styleUrls: ['./user-menu-nav.component.scss','../main-nav/main-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuNavComponent {
  @Input() usuario!: any;

  constructor(private sessionService: SessionService, private router: Router) {

  }

  onClickLogout() {
    var sessionId = sessionStorage.getItem("sessionId");
    this.sessionService.logout(sessionId).subscribe(logout => {
      sessionStorage.removeItem("sessionId")
      this.router.navigate(['/login'])
    })
    

  }
}
