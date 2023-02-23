import { Component, ViewEncapsulation } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabs-profile',
  templateUrl: './tabs-profile.component.html',
  styleUrls: ['./tabs-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsProfileComponent {
  publications: any;
  groups: any;

  constructor(private postService: PostService, private userService: UserService){ }

  ngOnInit(){
    this.postService.getMyPosts().subscribe(posts => {
      this.publications = posts;
    })

    this.userService.getMyGroups().subscribe(groups => {
      this.groups = groups;
      console.log(this.groups)
    })
  }

}
