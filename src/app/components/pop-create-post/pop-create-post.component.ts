import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-create-post',
  templateUrl: './pop-create-post.component.html',
  styleUrls: ['./pop-create-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopCreatePostComponent {
  url = '../../../assets/publication-image-mock.svg';

  constructor(private dialogRef : MatDialog){

  }

  closeDialog(){
    this.dialogRef.closeAll();
  }

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
