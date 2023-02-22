import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { PopCancelActionComponent } from 'src/app/components/pop-cancel-action/pop-cancel-action.component';
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

  sessionId: any;
  fetchName!: string;
  fetchUsername!: string;
  fetchBirthdate!: string;
  fetchBio!: string;
  fetchGame!: string;

  constructor(private router: Router, private userService: UserService, private dialogRef : MatDialog) {

  }


  ngOnInit(): void {
    this.sessionId = sessionStorage.getItem("sessionId");
    this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
      var jsonResult = JSON.parse(JSON.stringify(usuario))
      this.fetchName = jsonResult['usuario']['nome']
      this.fetchUsername = jsonResult['usuario']['username']
      this.fetchBirthdate = jsonResult['usuario']['data_nasc']
      this.fetchBio = jsonResult['usuario']['biografia']
      this.fetchGame = jsonResult['usuario']['jogo_favorito']
    })
    
    this.dataSource = new FormGroup({
      fullname: new FormControl(this.fetchName,[Validators.required, Validators.minLength(7),  Validators.pattern(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)]), 
      username: new FormControl(this.fetchUsername, [Validators.required, Validators.minLength(4)]),
      birthdate: new FormControl(this.fetchBirthdate, {validators:[Validators.required], nonNullable: true}),
      bio: new FormControl(this.fetchBio),
      game: new FormControl(this.fetchGame)
    })
    setTimeout(()=> {
      this.dataSource.patchValue({
        fullname: this.fetchName,
        username: this.fetchUsername,
        birthdate: this.fetchBirthdate,
        bio: this.fetchBio,
        game: this.fetchGame
      })
    }, 50)
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
    if (this.fullname!.value === this.fetchName) {
      this.fullname!.setErrors({'required': false});
    }
    this.fullname?.updateValueAndValidity();
    // Validação DATA DE NASCIMENTO
    if (this.today.getFullYear() - this.birthdate!.value.slice(0,4) < 10 ) { // Se o usuário tem menos de 10 anos
      this.birthdate!.setErrors({'age': true});
    } else {
      this.birthdate!.setErrors({'age': false});
      this.birthdate?.updateValueAndValidity();
    }

    if(this.dataSource.valid) { // Se o formulário for válido
      this.userService.editarUsuario(this.dataSource, this.sessionId).subscribe(usuario => {
        console.log(usuario)
      });
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

  openCancelDialog(){
    this.dialogRef.open(PopCancelActionComponent);
  }
}
