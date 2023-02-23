import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit{
  joinGroup = false;
  solicitation = true;
  exitGroup = false;

  groupId: any;
  groupData: any;

  constructor(private groupService: GroupService, private route: ActivatedRoute) {

  }

  ngOnInit():void {
    this.groupId = this.route.snapshot.paramMap.get('idgrupo')
    this.groupService.getGroup(this.groupId).subscribe(group => {
      this.groupData = group
    })
  }
}
