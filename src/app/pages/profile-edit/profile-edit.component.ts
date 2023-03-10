import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { PopCancelActionComponent } from 'src/app/components/pop-cancel-action/pop-cancel-action.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit{
  url: any;
  dataSource!: FormGroup
  today: Date = new Date();

  sessionId: any;
  usuario: any;

  constructor(private router: Router, private userService: UserService, private dialogRef : MatDialog, private _snackBar: MatSnackBar) {

  }


  ngOnInit(): void {
    this.sessionId = sessionStorage.getItem("sessionId");
    this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
      var jsonResult = JSON.parse(JSON.stringify(usuario))
      this.usuario = jsonResult['usuario'];
      this.url = this.usuario['foto']
    })
    
    this.dataSource = new FormGroup({
      fullname: new FormControl("",[Validators.required, Validators.minLength(7),  Validators.pattern(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)]), 
      username: new FormControl("", [Validators.required, Validators.minLength(4)]),
      birthdate: new FormControl("", {validators:[Validators.required], nonNullable: true}),
      bio: new FormControl(""),
      game: new FormControl("")
    })
    setTimeout(()=> {
      this.dataSource.patchValue({
        fullname: this.usuario['nome'],
        username: this.usuario['username'],
        birthdate: this.usuario['data_nasc'],
        bio: this.usuario['biografia'],
        game: this.usuario['jogo_favorito']
      })
    }, 200)
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
    if (this.fullname!.value === this.usuario['nome']) {
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
      this.userService.editarUsuario(this.dataSource, this.sessionId, this.url).subscribe(usuario => {
        console.log(usuario)
      });
      // TODO: Exibir mensagem ou pop-up de confirmacao de edicao de perfil
      this.router.navigate(['/profile'])
      this._snackBar.open("Perfil editado com sucesso!", "", {
        duration: 1500
      });
      
      
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
