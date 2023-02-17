import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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

  constructor(private router: Router) {

  }

  ngOnInit():void {
    this.dataSource = new FormGroup({
      id: new FormControl(""),
      username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }

  submitLogin(event: any) {
    if (this.dataSource.valid) {
      this.router.navigate(['/feed']) // EDITE AQUI - Navegar para /feed
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
