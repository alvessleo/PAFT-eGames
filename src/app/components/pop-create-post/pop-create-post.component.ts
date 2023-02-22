import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-pop-create-post',
  templateUrl: './pop-create-post.component.html',
  styleUrls: ['./pop-create-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopCreatePostComponent {
  url = '../../../assets/publication-image-mock.svg';
  dataSource!: FormGroup

  constructor(private dialogRef : MatDialog, private postService: PostService){

  }

  ngOnInit():void {
    this.dataSource = new FormGroup({
      title: new FormControl("", [Validators.required]),
      img: new FormControl("", [Validators.required]),
    })
  }

  get title() {
    return this.dataSource.get('title');
  }

  get img() {
    return this.dataSource.get('img');
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

  createPost(evento: Event){
      evento.preventDefault();
      if (this.dataSource.valid) {
        this.postService.publishPost(this.dataSource, this.url).subscribe(result => {
          console.log(result);
        });
      } else {
        console.log("Não criou a publicação");
      }
      
  }

}
