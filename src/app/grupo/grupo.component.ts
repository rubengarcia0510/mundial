import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  @Input() groupName: any;
  displayedColumns: string[] = ['name'];

  constructor() {
   }

  ngOnInit(): void {

  }

}
