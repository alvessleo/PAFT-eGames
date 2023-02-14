import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent {
  joinGroup = false;
  solicitation = true;
  exitGroup = false;
}
