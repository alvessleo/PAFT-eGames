import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {
  login: any;
  dataSource!: FormGroup
  inputType: string = "password"
  showPass: boolean = false
  visibility: string = "visibility"

  constructor(private router: Router, private sessionService: SessionService, private _snackBar: MatSnackBar) {

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
      this.sessionService.logarUsuario(this.dataSource).subscribe(login => {
        this.login = login;
        if (!this.login['sucess']){
          if (this.login['error'] == 1){
            this.username!.setErrors({'Unknown': true});
          }
          if (this.login['error'] == 2){
            this.password!.setErrors({'InvalidPass': true});
          }
        } else {
          sessionStorage.setItem('sessionId', this.login['sessionId']);
          this._snackBar.open("Login sucedido", "", {
            duration: 5000
          });
          setTimeout(() => {
            this.router.navigate(['/feed']);
          }, 5000);
        }
      });
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
