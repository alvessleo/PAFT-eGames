import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, RouterLink } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { ApiService } from 'src/app/services/api.service';
import { GlobalEventEmitterService } from 'src/app/services/global-event-emitter.service';

@Component({
  selector: 'app-feed-content',
  templateUrl: './feed-content.component.html',
  styleUrls: ['./feed-content.component.scss']
})
export class FeedContentComponent {
  sessionId: any;
  usuario!: any;
  publications: any;
  games: any;


  story: any[] = [
    {
      "name" : "Gaules",
      "photo" : "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2021/11/reproducao-gaules-instagram-scaled.jpg"
    },
    {
      "name" : "YoDa",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png"
    },
    {
      "name" : "alanzoka",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png"
    },
    {
      "name" : "coringa",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/c07acddc-1e1b-479f-97c4-09636f80e857-profile_image-70x70.png"
    },
    {
      "name" : "coreano",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/fb16ce63-59c5-4a8f-8ec7-c1f017fe56b3-profile_image-70x70.png"
    },
    {
      "name" : "RNakano",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/f990a684-471d-441f-9403-05c837507dee-profile_image-70x70.png"
    },
    {
      "name" : "brnwow",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/8ed805db-989c-4f2f-9425-d4b9db6c23af-profile_image-70x70.png"
    },
    {
      "name" : "kennyS",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/a2f2af5e-6799-4561-832e-f166604860ce-profile_image-70x70.png"
    },
    {
      "name" : "bt0",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/8e8df4d0-a103-4c27-80f3-12653d0f630c-profile_image-70x70.png"
    },
    {
      "name" : "Necros",
      "photo" : "https://static-cdn.jtvnw.net/jtv_user_pictures/d65390f6-08c9-4042-9e24-7b0d395627c7-profile_image-70x70.png"
    }
  ]


    constructor(private userService: UserService, private router: Router, private postService: PostService, private apiService: ApiService) {
    }

  ngOnInit(){
    this.sessionId = sessionStorage.getItem("sessionId");
    if (this.sessionId === null){
      this.router.navigate(['/']);
    }
    this.userService.usuarioDaSessao(this.sessionId).subscribe(usuario => {
      var jsonResult = JSON.parse(JSON.stringify(usuario))
      this.usuario = jsonResult['usuario'];
      let userId = jsonResult['usuario']['idUsuario'];
      sessionStorage.setItem("idUsuario", userId);
    })

    this.postService.getPosts().subscribe(posts => {
      this.publications = posts;
    })

    this.apiService.getJogosFeed().subscribe(feedGames => {
      this.games = feedGames
    })

    GlobalEventEmitterService.get('novoPost').subscribe(data => {
      this.postService.getPosts().subscribe(posts => {
        this.publications = posts;
      })
    })

    GlobalEventEmitterService.get('likedPost').subscribe(data => {
      this.postService.getPosts().subscribe(posts => {
        this.publications = posts;
      })
    })
    GlobalEventEmitterService.get('comentou').subscribe(data => {
      this.postService.getPosts().subscribe(posts => {
        this.publications = posts;
      })
    })
  }

  

}
