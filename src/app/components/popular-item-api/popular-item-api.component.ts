import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-item-api',
  templateUrl: './popular-item-api.component.html',
  styleUrls: ['./popular-item-api.component.scss']
})
export class PopularItemApiComponent {
  @Input() game: any;
  nome: any;
  rating: any;
  cover: any;
  genres: any;
   
  ngOnInit(){
      this.nome = this.game['name'];
      this.rating = this.game['rating'];
      this.cover = this.game['cover'];
      this.genres = this.game['genres'];
  }
}
