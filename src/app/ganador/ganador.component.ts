import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ganador } from '../Interfaces';



@Component({
  selector: 'app-ganador',
  templateUrl: './ganador.component.html',
  styleUrls: ['./ganador.component.css']
})
export class GanadorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GanadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ganador) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
