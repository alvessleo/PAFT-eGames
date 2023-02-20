import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-item-api',
  templateUrl: './popular-item-api.component.html',
  styleUrls: ['./popular-item-api.component.scss']
})
export class PopularItemApiComponent {
  @Input() nome: string | undefined;
   
  ngOnInit(){
        
  }
}
