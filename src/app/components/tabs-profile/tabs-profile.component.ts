import { Component, ViewEncapsulation } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tabs-profile',
  templateUrl: './tabs-profile.component.html',
  styleUrls: ['./tabs-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsProfileComponent {
  publications: any;

  constructor(private postService: PostService){ }

  ngOnInit(){
    this.postService.getMyPosts().subscribe(posts => {
      this.publications = posts;
    })
  }

}
