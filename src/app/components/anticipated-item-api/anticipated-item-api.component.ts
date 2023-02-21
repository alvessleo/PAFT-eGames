import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anticipated-item-api',
  templateUrl: './anticipated-item-api.component.html',
  styleUrls: ['./anticipated-item-api.component.scss']
})
export class AnticipatedItemApiComponent {
  @Input() review: any;
  text: any;
  author: any;
  imgCover: any;

  ngOnInit(){
    this.text = this.review['review'];
    this.imgCover = this.review['imgCover'];
    this.author = this.review['author']['steamid'];
  }
}
