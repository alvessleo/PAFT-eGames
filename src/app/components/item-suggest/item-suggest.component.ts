import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-suggest',
  templateUrl: './item-suggest.component.html',
  styleUrls: ['./item-suggest.component.scss']
})
export class ItemSuggestComponent {
  @Input() game: any;
  nome: any;
  categoria: any;
  cover: any;

  ngOnInit(){
    this.nome = this.game['name'];
    this.cover = this.game['cover'];
    this.categoria = this.game['genres'];
  }
}
