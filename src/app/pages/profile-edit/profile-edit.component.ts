import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit{
  url = '../../../assets/abstract-user-flat-4.webp';
  dataSource!: FormGroup
  today: Date = new Date();

  constructor(private router: Router, private userService: UserService) {

  }


  ngOnInit(): void {
    this.dataSource = new FormGroup({
      // TODO: Preencher inputs com os dados do banco
      fullname: new FormControl('', [Validators.required, Validators.minLength(7),  Validators.pattern(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)]), 
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      birthdate: new FormControl('', [Validators.required]),
      bio: new FormControl(''),
      game: new FormControl('')
    })
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

  submitEdit() {
    // TODO: Validação username já presente na base de dados

    // Validação DATA DE NASCIMENTO
    if (this.today.getFullYear() - this.birthdate!.value.slice(0,4) < 10 ) { // Se o usuário tem menos de 10 anos
      this.birthdate!.setErrors({'age': true});
    } else {
      this.birthdate!.setErrors({'age': false});
      this.birthdate?.updateValueAndValidity();
    }

    if(this.dataSource.valid) { // Se o formulário for válido
      this.userService.editarUsuario(this.dataSource);
      // TODO: Tornar metodo editarUsuario do service observable e adicionar o .subscribe aqui na chamada desse método 
      // TODO: Exibir mensagem ou pop-up de confirmacao de edicao de perfil

      this.router.navigate(['/profile'])
    }

  }

  onSelectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any) => {
        this.url = event.target.result;
      }
    }
  }
}
