import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PopCreatePostComponent } from '../pop-create-post/pop-create-post.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit{
  @Input() username!: string;

  public menuOpened = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialogRef : MatDialog) {

  }

  ngOnInit(): void {
    
  }

<<<<<<< HEAD
  public onClick(event: MouseEvent) {
    event.stopPropagation();
    this.menuOpened = false;
  }
=======
>>>>>>> leo-salgado-branch
  
  openDialog(){
    this.dialogRef.open(PopCreatePostComponent);
  }
}
