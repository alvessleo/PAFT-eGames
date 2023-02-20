import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-noticias-api-page',
  templateUrl: './noticias-api-page.component.html',
  styleUrls: ['./noticias-api-page.component.scss']
})
export class NoticiasApiPageComponent {
  nome: string = "Counter Strike";
  nome2: string = "Rainbow Six";
  nome3: string = "Rocket League";
  nome4: string = "Lego Batman";
  nome5: string = "FIFA 18";

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getPopularGames().subscribe(popularGames => {
      console.log(popularGames);
      
    })
  }

}
