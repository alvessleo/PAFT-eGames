import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private database = "http://127.0.0.1:5000/";
  private body: any;

  constructor(private http : HttpClient) { }

  publishPost(dataSource: FormGroup, img: string){
    let title = dataSource.get("title");
    let idUser = sessionStorage.getItem("idUsuario");
    this.body = {"idUser": idUser, "img": img, "title": title!['value']};
    return this.http.post(`${this.database}new-post`, this.body);
  }

  getPosts(){
    return this.http.get(`${this.database}get-posts`);
  }

  likePosts(idPost: number){
    return this.http.get(`${this.database}like-post/${idPost}`);
  }

  commentPost(comment: any, idPost: number){
    let idUser = sessionStorage.getItem("idUsuario");
    let comentario = comment.get("comment");
    this.body = {"idUser": idUser, "comment": comentario!['value']};
    return this.http.post(`${this.database}comment-post/${idPost}`, this.body);
  }

  getMyPosts(){
    let idUser = sessionStorage.getItem("idUsuario");
    return this.http.get(`${this.database}get-my-posts/${idUser}`);
  }
}
