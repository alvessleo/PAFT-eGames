import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  headers: any;
  constructor(private http : HttpClient) { }
  
  usuarioDaSessao(session: any){
    this.body = {session: session};
    return this.http.get(`${this.database}get-user-by-session/${session}`, this.body)
  }

  cadastrarUsuario(dataSource: FormGroup) {
    this.name = dataSource.get('fullname');
    this.username = dataSource.get('username');
    this.data_nasc = dataSource.get('birthdate');
    this.senha = dataSource.get('password');
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*'
    })
    let options = {headers:this.headers};
    this.body = {name: this.name['value'], username: this.username['value'], data_nasc: this.data_nasc['value'], senha: this.senha['value']};
    return this.http.post(`${this.database}new-user`, this.body, options)
  }

  editarUsuario(formGroup: FormGroup) {

  }

}
