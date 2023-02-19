import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private database = "http://127.0.0.1:5000/";
  private body: any;
  name: any;
  username: any;
  data_nasc: any;
  senha: any;

  constructor(private http : HttpClient) { }
  
  cadastrarUsuario(dataSource: FormGroup) {
    this.name = dataSource.get('fullname');
    this.username = dataSource.get('username');
    this.data_nasc = dataSource.get('birthdate');
    this.senha = dataSource.get('password');
    this.body = {name: this.name['value'], username: this.username['value'], data_nasc: this.data_nasc['value'], senha: this.senha['value']};
    return this.http.post(`${this.database}new-user`, this.body)
  }

  editarUsuario(formGroup: FormGroup) {

  }

}
