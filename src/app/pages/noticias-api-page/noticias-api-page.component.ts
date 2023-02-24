import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-noticias-api-page',
  templateUrl: './noticias-api-page.component.html',
  styleUrls: ['./noticias-api-page.component.scss']
})
export class NoticiasApiPageComponent {
  popularGames: any;
  news: any;
  forU: any = [];
  general: any = [];
  reviews: any;

  constructor(private apiService: ApiService, private router: Router){
    
  }

  ngOnInit(){
    let sessionId = sessionStorage.getItem("sessionId");
    if (sessionId === null){
      this.router.navigate(['/']);
    }
     this.apiService.getPopularGames().subscribe(popularGames => {
      this.popularGames = popularGames;
    }) 

    this.apiService.getNews().subscribe(news => {
      this.news = news;
      this.news = this.news['appnews']['newsitems']; 
      for (let x = 0; x < 10; x++){
        switch(this.news[x]['appid']){
          case(730):
            this.news[x]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co610k.jpg"
          break;
          case(1172470):
            this.news[x]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg"
          break;
          case(1962663):
            this.news[x]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co20o8.jpg"
          break;
          case(1672970):
            this.news[x]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg"
          break;
          case(1506830):
            this.news[x]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dsm.jpg"
          break;
        }

        if (x%2 == 0){
          this.forU.push(this.news[x]);
        } else{
          this.general.push(this.news[x]);
        }
      }

      let reviewsId = [730, 1172470, 1962663, 1506830, 1672970];
      let index = Math.floor(Math.random() * 5);
      this.apiService.getreviews(reviewsId[index]).subscribe(reviews => {
        this.reviews = reviews;
        this.reviews = this.reviews['reviews'];
        for (let y = 0; y < 5; y++){
          switch(reviewsId[index]){
            case(730):
              this.reviews[y]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co610k.jpg"
            break;
            case(1172470):
              this.reviews[y]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wzo.jpg"
            break;
            case(1962663):
              this.reviews[y]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co20o8.jpg"
            break;
            case(1672970):
              this.reviews[y]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.jpg"
            break;
            case(1506830):
              this.reviews[y]['imgCover'] = "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dsm.jpg"
            break;
          }
        }
      })
      
    })
  }

}
