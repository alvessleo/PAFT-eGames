import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss']
})
export class GroupPageComponent implements OnInit{
  joinGroup = false;
  solicitation = true;
  exitGroup = false;

  groupId: any;
  groupData: any;

  idUsuario: any;
  userInGroup: any;

  constructor(private groupService: GroupService, private route: ActivatedRoute, private userService: UserService, private router: Router) {

  }

  ngOnInit():void {
    let sessionId = sessionStorage.getItem("sessionId");
    if (sessionId === null){
      this.router.navigate(['/']);
    }
    this.groupId = this.route.snapshot.paramMap.get('idgrupo')
    this.idUsuario = sessionStorage.getItem('idUsuario')

    this.userService.usuarioNoGrupo(this.idUsuario, this.groupId).subscribe(result => {
      var jsonResult = JSON.parse(JSON.stringify(result))
      if (jsonResult['userInGroup'] === 'true') {
        this.userInGroup = true
        this.exitGroup = true
        this.solicitation = false
        this.joinGroup = false
      } else {
        this.userInGroup = false
        this.exitGroup = false
      }
    })

    this.groupService.getGroup(this.groupId).subscribe(group => {
      this.groupData = group
      if (this.groupData['status'] === "Privado" && !this.userInGroup) {
        this.solicitation = true
        this.joinGroup = false
      } else if (this.groupData['status'] === "Público" && !this.userInGroup) {
        this.solicitation = false
        this.joinGroup = true
      }
    })
    
  }

  entrarNoGrupo() {
    this.idUsuario = sessionStorage.getItem('idUsuario')
    this.userService.entrarNoGrupo(this.idUsuario, this.groupId).subscribe(result => {
      console.log(result)
      var jsonResult = JSON.parse(JSON.stringify(result))
      if (jsonResult['sucess']) {
        this.solicitation = false
        this.joinGroup = false
        this.exitGroup = true
      }
    })
  }

  sairDoGrupo() {
    this.idUsuario = sessionStorage.getItem('idUsuario')
    this.userService.sairDoGrupo(this.idUsuario, this.groupId).subscribe(result => {
      console.log(result)
      var jsonResult = JSON.parse(JSON.stringify(result))
      if (jsonResult['sucess']) {
        this.joinGroup = true
        this.exitGroup = false
      }
    })
  }
}
