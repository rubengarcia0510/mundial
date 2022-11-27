import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlagsService } from '../flags.service';
import { Ganador } from '../Interfaces';



@Component({
  selector: 'app-ganador',
  templateUrl: './ganador.component.html',
  styleUrls: ['./ganador.component.css']
})
export class GanadorComponent implements OnInit {

  banderas: any = []
  
  constructor(public dialogRef: MatDialogRef<GanadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ganador,
    public flagService: FlagsService) { }

  ngOnInit(): void {
    this.cargarFlags()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cargarFlags() {
    this.flagService.getFlags().forEach(element => {
      this.banderas[element.country] = element.flag
    })
  }

}
