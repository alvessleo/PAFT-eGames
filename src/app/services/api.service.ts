import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = "https://api.igdb.com";
  private clientId = "3jo5nfmbis8e6uidjfciieqeh5y74e";
  private accessToken = "Bearer wmrxzbfyr490naymy21a3leks0r2w4";
  private body: any;
  private header: any;

  constructor(private http : HttpClient) { }

  getPopularGames(){
    //this.body = "fields name, rating, genres, cover; where id = (1905,126459,123, 115, 121, 131800, 1372, 27789, 114795, 154986);";
    this.body = "fields name; limit 10;";
    this.header = new HttpHeaders({
        'Content-Type':  'application/json',
        'Client-ID': this.clientId,
        'Authorization': this.accessToken,
        'Access-Control-Allow-Origin' : '*'
      });
    return this.http.post(`${this.api}/games/`, this.body, {headers: this.header});  
    //return this.http.post("https://id.twitch.tv/oauth2/token?client_id=3jo5nfmbis8e6uidjfciieqeh5y74e&client_secret=2d388mdyvldv6jqalzimn4gd52a0hv&grant_type=client_credentials", "");
  }

}
