import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-create-page',
  templateUrl: './group-create-page.component.html',
  styleUrls: ['./group-create-page.component.scss']
})
export class GroupCreatePageComponent implements OnInit{
  url='../../../assets/group-image-mock.png';
  
  dataSource!: FormGroup;
  
  ngOnInit(): void {
    this.dataSource = new FormGroup({
      groupName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      groupDescription: new FormControl('', [Validators.required]),
      groupImage: new FormControl('', [Validators.required]),
      groupType: new FormControl('', [Validators.required])
    });
  }

  get groupName() {
    return this.dataSource.get('groupName');
  }

  get groupDescription() {
    return this.dataSource.get('groupDescription');
  }

  get groupImage() {
    return this.dataSource.get('groupImage');
  }

  get groupType() {
    return this.dataSource.get('groupType');
  }

  onSubmit() {
    if (this.dataSource.valid) {
      const formData = new FormData()
      formData.append('groupName', this.groupName!.value)
      formData.append('groupDescription', this.groupName!.value)
      formData.append('groupImage', this.groupImage!.value)
      formData.append('groupType', this.groupType!.value)

    }

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