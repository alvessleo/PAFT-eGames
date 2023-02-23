import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.scss']
})
export class SearchGroupComponent implements OnInit{
  @Input() grupo: any;
  groupId: any;
  groupName: any;
  groupDescription: any;
  groupImg: any;
  groupType: any;
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.grupo);
    this.groupId = this.grupo['idgrupo']
    this.groupName = this.grupo['nome']
    this.groupDescription = this.grupo['descricao']
    this.groupImg = this.grupo['foto']
    this.groupType = this.grupo['status']
  }
  
  abrirGrupo(){
    this.router.navigate([`/group/${this.groupId}`])
  }
  
}
