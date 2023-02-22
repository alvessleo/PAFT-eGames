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
  
  recuperarTodosUsuarios() {
    return this.http.get(`${this.database}get-all-users`)
  }

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

  editarUsuario(dataSource: FormGroup, session: any, img: any) {
    var name = dataSource.get('fullname');
    var username = dataSource.get('username');
    var data_nasc = dataSource.get('birthdate');
    var bio = dataSource.get('bio');
    var jogo_favorito = dataSource.get('game');
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*'
    })
    let options = {headers:this.headers};
    this.body = {name: name!['value'], username: username!['value'], data_nasc: data_nasc!['value'], bio: bio!['value'], jogo_favorito: jogo_favorito!['value'], session: session, img: img};
    return this.http.put(`${this.database}edit-user/${session}`, this.body, options)
  }

}
