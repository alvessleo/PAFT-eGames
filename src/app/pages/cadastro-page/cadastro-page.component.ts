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
  today = new Date()

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
    console.log(this.birthdate!.value)
    // Validação DATA DE NASCIMENTO
    if (this.today.getFullYear() - this.birthdate!.value.slice(0,4) < 10 ) { // Se o usuário tem menos de 10 anos
      this.birthdate!.setErrors({'age': true});
    } else {
      this.birthdate!.setErrors({'age': false});
      this.birthdate?.updateValueAndValidity();
    }
    // Validação CONFIRMAÇÃO DE SENHA
    if (this.confirmPassword!.value !== this.password!.value) { // Se a confirmação de senha não é igual a senha
      this.confirmPassword!.setErrors({'nomatch': true});
    } else {
      this.confirmPassword!.setErrors({'nomatch': false});
      this.confirmPassword?.updateValueAndValidity();
    }
    if(this.dataSource.valid) { // Se o formulário for válido
      this.usuario!.nome = this.fullname!.value;
      this.usuario!.username = this.username!.value;
      this.usuario!.dataNasc = this.birthdate!.value;
      this.usuario!.senha = this.password!.value;
      // TODO: Lógica chamar service cadastro para cadastrar usuário no banco
      this.router.navigate(['/login'])
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
