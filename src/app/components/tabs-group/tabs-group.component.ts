import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsGroupComponent {
  @Input() groupData: any;
}
