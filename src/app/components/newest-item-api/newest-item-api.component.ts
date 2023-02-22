import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newest-item-api',
  templateUrl: './newest-item-api.component.html',
  styleUrls: ['./newest-item-api.component.scss']
})
export class NewestItemApiComponent {
  @Input() noticia1: any;
  title: any;
  url: any;
  imgCover: any;
  date: any;
  author: any;

  ngOnInit(){
    this.title = this.noticia1['title'];
    this.imgCover = this.noticia1['imgCover'];
    this.url = this.noticia1['url'];
    this.date = this.noticia1['date'];
    this.author = this.noticia1['author'];
    
  }
}
