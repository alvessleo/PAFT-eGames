import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private database = "http://127.0.0.1:5000/";
  private body: any;
  username: any;
  senha: any;

  constructor(private http : HttpClient) { }

  logarUsuario(dataSource: FormGroup) {
    this.username = dataSource.get('username');
    this.senha = dataSource.get('password');
    this.body = {username: this.username['value'], senha: this.senha['value']};
    return this.http.post(`${this.database}login`, this.body)
  }

  deslogarUsuario(sessionId: number){
    
  }

}
