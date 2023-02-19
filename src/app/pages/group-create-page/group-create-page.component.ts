import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-create-page',
  templateUrl: './group-create-page.component.html',
  styleUrls: ['./group-create-page.component.scss']
})
export class GroupCreatePageComponent{
  url='../../../assets/group-image-mock.png';
  
  onSelectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any) => {
        this.url = event.target.result;
      }
    }
  }
}