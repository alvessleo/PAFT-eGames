import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PopCreatePostComponent } from '../pop-create-post/pop-create-post.component';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit{
  @Input() usuario!: any;
  grupos: any;

  public menuOpened = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private dialogRef : MatDialog, private groupService: GroupService, private router:Router) {

  }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(grupos => {
      this.grupos = grupos
    })
  }

  public onClick(event: MouseEvent) {
    event.stopPropagation();
    this.menuOpened = false;
  }

  
  openDialog(){
    this.dialogRef.open(PopCreatePostComponent);
  }

  
}
