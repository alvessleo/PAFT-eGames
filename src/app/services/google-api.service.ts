import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private url = "https://www.googleapis.com/drive/v3/files/1KgvlRwrAfRzG54L90hFwuaI6XrosCngN";
  private Client_ID = "105914757726-3ul4dqvv1nbb3k6i8ep6g6egibfbpv11.apps.googleusercontent.com";
  private Client_secret = "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";
  private uri = "https://developers.google.com/oauthplayground";

  private accessToken = "ya29.a0AVvZVsrKGHAIGPtsd3VxNK7PAdIepXg972AWj5Ry_Agdsc2vDX-L0lK4eYGeELjkw2xJ5CM2-xEB36DoXR6QNHdoManL7cD155PCn3QIhjP5VaYWYffgRd728QdXfyF6DONBQvusWpBVPs59w6ShJBG2ci6raCgYKAX8SARMSFQGbdwaInVg2OgW_H6GGsbtQKrMhZQ0163";
  private refreshToken = "1//04IcTeCFMsPuRCgYIARAAGAQSNwF-L9IrJh5U5B6kPL0MJ2xI-2iHO4DgM0GQlWYaRb3uUCKwUaup7y4D8JrHhttv9fJMZDK71a8";

  private headersAccess = new HttpHeaders({
    'Authorization': `Bearer ${this.accessToken}`
  });

  constructor(private http : HttpClient) { 
    
  }

  salvarImg(img: string){

    //https://drive.google.com/file/d/fileId/view?usp=share_link
    
  }
}
