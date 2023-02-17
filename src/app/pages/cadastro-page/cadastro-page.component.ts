import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interface/Usuario';

@Component({
  selector: 'app-cadastro-page',
  templateUrl: './cadastro-page.component.html',
  styleUrls: ['./cadastro-page.component.scss']
})
export class CadastroPageComponent implements OnInit {
  usuario?: Usuario
  dataSource!: FormGroup
  inputType: string = "password"
  showPass: boolean = false
  visibility: string = "visibility"

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource = new FormGroup({
      fullname: new FormControl("", [Validators.minLength(7), Validators.required, Validators.pattern(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)]),
      username: new FormControl("", [Validators.minLength(4), Validators.required]),
      birthdate: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required])
    });
  }

  get fullname(){
    return this.dataSource.get('fullname');
  }

  get username(){
    return this.dataSource.get('username');
  }

  get birthdate() {
    return this.dataSource.get('birthdate');
  }

  get confirmPassword() {
    return this.dataSource.get('confirmPassword');
  }
  
  get password(){
    return this.dataSource.get('password');
  }


  submitCadastro() {
    if (this.confirmPassword!.value !== this.password!.value) {
      this.confirmPassword!.setErrors({'nomatch': true});
    } else {
      this.confirmPassword!.setErrors({'nomatch': false});
      // TODO: Lógica cadastrar usuário no banco (usar um Service)
      if(this.dataSource.valid) {
        this.router.navigate(['/login'])
      }
    }
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
