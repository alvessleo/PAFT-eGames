import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss']
})
export class ItemGroupComponent {
  button = false;
  @Input() group: any;

  constructor(private router: Router) {

  }

  acessarGrupo(){
    this.router.navigate([`/group/${this.group['idgrupo']}`])
  }

}
