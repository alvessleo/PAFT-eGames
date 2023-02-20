import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-cancel-action',
  templateUrl: './pop-cancel-action.component.html',
  styleUrls: ['./pop-cancel-action.component.scss']
})
export class PopCancelActionComponent {

  constructor(private dialogRef : MatDialog) {

  }

  closeCancelDialog(){
    this.dialogRef.closeAll();
  }
}
