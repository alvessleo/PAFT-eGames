import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private header: any;

  constructor(private http : HttpClient) { }

  getPopularGames(){
    return this.http.get("http://127.0.0.1:5000/get-popular-games")
  }

  getNews(){
    this.header = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key':  'c800e1fba0msh26c976a5bba296ap100f36jsnc32868188206',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
      })
    };
    /* CSGO: 730
       Apex Legends: 1172470 
       Call of Duty: 1962663
       Fifa 22: 1506830
       Minecraft: 1672970
    */
    let newsId = [730, 1172470, 1962663, 1506830, 1672970]
    let index = Math.floor(Math.random() * 5);
    return this.http.get(`https://steam2.p.rapidapi.com/newsForApp/${newsId[index]}/limit/10/300`, this.header)
  }

  getreviews(){
    this.header = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key':  'c800e1fba0msh26c976a5bba296ap100f36jsnc32868188206',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
      })
    };
    return this.http.get("https://steam2.p.rapidapi.com/appReviews/1672970/limit/5/*", this.header)
  }

}
