import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soon-item-api',
  templateUrl: './soon-item-api.component.html',
  styleUrls: ['./soon-item-api.component.scss']
})
export class SoonItemApiComponent {
  @Input() noticia2: any;
  title: any;
  url: any;
  imgCover: any;
  date: any;
  author: any;

  ngOnInit(){
    this.title = this.noticia2['title'];
    this.imgCover = this.noticia2['imgCover'];
    this.url = this.noticia2['url'];
    this.date = this.noticia2['date'];
    this.author = this.noticia2['author'];
    
  }
}
