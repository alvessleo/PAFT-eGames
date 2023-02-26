import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private url = "https://www.googleapis.com/drive/v3/files/";
  private Client_ID = "";
  private Client_secret = "";
  private uri = "https://developers.google.com/oauthplayground";

  private accessToken = "";
  private refreshToken = "";

  constructor(private http : HttpClient) { 
    
  }

  salvarImg(img: string){

    //https://drive.google.com/file/d/fileId/view?usp=share_link
    
  }
}
