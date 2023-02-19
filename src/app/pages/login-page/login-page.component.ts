import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  dataSource!: FormGroup
  inputType: string = "password"
  showPass: boolean = false
  visibility: string = "visibility"

  constructor(private router: Router, private sessionService: SessionService) {

  }

  ngOnInit():void {
    this.dataSource = new FormGroup({
      id: new FormControl(""),
      username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  submitLogin(event: any) {
    // TODO: Chamar user service para fazer uma pesquisa para conferir se existe esse username com essa senha no banco.
    if (this.dataSource.valid) {
      this.sessionService.logarUsuario(this.dataSource);
      this.router.navigate(['/feed']) 
    } else {
      console.log("nao logou")
    }
  }

  get username() {
    return this.dataSource.get('username');
  }

  get password() {
    return this.dataSource.get('password');
  }

  togglePass() {
    this.showPass = !this.showPass
    if (this.showPass) {
      this.inputType = "text"
      this.visibility = "visibility_off"
    } else {
      this.inputType = "password"
      this.visibility = "visibility"
    }
  }

}
