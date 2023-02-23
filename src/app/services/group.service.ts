import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private database = "http://127.0.0.1:5000/";
  private body: any;

  constructor(private http : HttpClient) { }

  createGroup(dataSource: FormGroup, img: string){
    let idUser = sessionStorage.getItem("idUsuario");
    let name = dataSource.get("groupName");
    let description = dataSource.get("groupDescription")
    let type = dataSource.get("groupType")
    this.body = {"name": name!['value'], "description": description!['value'], "type": type!['value'], "img": img};
    return this.http.post(`${this.database}new-group`, this.body);
  }

  getAllGroups() {
    return this.http.get(`${this.database}get-all-groups`)
  }

  getGroup(idgrupo: number) {
    return this.http.get(`${this.database}get-group/${idgrupo}`)
  }
}
