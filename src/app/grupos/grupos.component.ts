import { Component, Directive, ElementRef, Input, OnInit, ViewChild, ɵisObservable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlagsService } from '../flags.service';
import { GanadorComponent } from '../ganador/ganador.component';
import { Grupo, Equipo, Partido, Bandera } from '../Interfaces';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component';
import { GroupsService } from '../service/groups.service';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Group } from '../model/group';
import { Team } from '../model/team';

var EQUIPOS_GRUPO_A: Equipo[] = [
  { name: 'Qatar', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Holanda', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Senegal', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Ecuador', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_B: Equipo[] = [
  { name: 'Inglaterra', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'USA', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Iran', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Gales', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_C: Equipo[] = [
  { name: 'Argentina', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Mexico', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Polonia', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Arabia Saudita', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_D: Equipo[] = [
  { name: 'Francia', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Dinamarca', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Túnez', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Australia', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_E: Equipo[] = [
  { name: 'España', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Alemania', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Japón', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Costa Rica', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_F: Equipo[] = [
  { name: 'Belgica', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Croacia', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Marruecos', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Canadá', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_G: Equipo[] = [
  { name: 'Brasil', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Suiza', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Serbia', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Camerún', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var EQUIPOS_GRUPO_H: Equipo[] = [
  { name: 'Portugal', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Uruguay', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Corea del Sur', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 },
  { name: 'Ghana', pj: 0, pg: 0, pp: 0, pe: 0, gf: 0, gc: 0, points: 0 }
];

var GRUPOS: Grupo[] = [
  {
    name: "A",
    equipos: EQUIPOS_GRUPO_A
  },
  {
    name: "B",
    equipos: EQUIPOS_GRUPO_B
  },
  {
    name: "C",
    equipos: EQUIPOS_GRUPO_C
  },
  {
    name: "D",
    equipos: EQUIPOS_GRUPO_D
  },
  {
    name: "E",
    equipos: EQUIPOS_GRUPO_E
  },
  {
    name: "F",
    equipos: EQUIPOS_GRUPO_F
  },
  {
    name: "G",
    equipos: EQUIPOS_GRUPO_G
  },
  {
    name: "H",
    equipos: EQUIPOS_GRUPO_H
  }
]


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})


export class GruposComponent implements OnInit {
  grupos: any
  isActive = false;
  partidosFaseGrupos: any = []
  partidosOctavos: any = []
  partidosCuartos: any = []
  partidosSemi: any = []
  partidosFinal: any = []
  partidosTercer: Partido[] = []
  groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  ganador: string
  ganadorTercerPuesto: string
  flagEquipo: Bandera[]
  animal:any

  logicaFaseGrupos = [
    { fecha: 1, equipo1: 0, equipo2: 3 },
    { fecha: 1, equipo1: 1, equipo2: 2 },
    { fecha: 2, equipo1: 0, equipo2: 2 },
    { fecha: 2, equipo1: 1, equipo2: 3 },
    { fecha: 3, equipo1: 0, equipo2: 1 },
    { fecha: 3, equipo1: 2, equipo2: 3 },
  ]

  banderas: any = []
  group:Group
  team:Team
  data:any
  constructor(public flagService: FlagsService, 
              public snackBar: MatSnackBar,
              public dialog: MatDialog,
              private groupsService: GroupsService) {
    this.grupos = GRUPOS
    this.partidosOctavos = this.octavosFinal()
    this.partidosCuartos = this.cuartosFinal()
    this.partidosSemi = this.semiFinal()
    this.partidosFinal = this.final()
    this.partidosFaseGrupos = this.partidosGrupoA()
    this.ganador = ""
    this.ganadorTercerPuesto = ""
    this.flagEquipo = flagService.getFlags()
    this.partidosTercer.push({
      equipo1:'',
      golesEquipo1:0,
      equipo2:'',
      golesEquipo2:0,
      ganador:''
    })
    this.team={
      "name":"String",
            "pj":0,
      "pg":0,
      "pe":0,
      "pp":0,
      "gf":0,
      "gc":0,
      "dg":0,
      "points":0
    }
    this.group={
      "name":"",
       "teams":[this.team]
    }
    this.data=new Observable<any>();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GanadorComponent, {
      width: '250px',
      data: {name: this.ganador}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  cargarFlags() {
    this.flagService.getFlags().forEach(element => {
      this.banderas[element.country] = element.flag
    })
  }

  ngOnInit(): void {
    this.grupos = GRUPOS
    this.cargarFlags()

    this.groups.forEach(valor=>{
      console.log("Grupo :"+valor)
      this.groupsService.getGroups(valor).subscribe(data=>{
        
        this.data=data
        console.log("Salida groupService: "+this.data.name)
      });
    })
    

    this.creatingObserversForFirstGroupData();

  }

  updateGrupo(event: any, grupo: string, equipo1: string, equipo2: string, fecha: string) {

    this.updateGoals(event,grupo, equipo1, equipo2, fecha)
    this.updatePuntos(grupo, equipo1, equipo2, fecha)
    this.updatePartidos(grupo, equipo1, equipo2, fecha)
    this.sortPuntos(grupo)
    this.partidosOctavos = this.octavosFinal()

  }

  sortPuntos(grupo: string) {
    let indexGrupos = this.grupos.findIndex((element: { name: string; }) => element.name == grupo)
    this.grupos[indexGrupos].equipos.sort(function (x: { gf: number; gc: number; points: number; }, y: { gf: number; gc: number; points: number; }) {
      let diffX: number = x.gf - x.gc
      let diffY: number = y.gf - y.gc
      if (x.points == y.points && diffX == diffY) {
        return 0;
      }
      if (x.points < y.points && diffX < diffY) {
        return -1;
      }
      return 1;
    });

    let aux: Equipo[] = []

    aux.push(this.grupos[indexGrupos].equipos[3])
    aux.push(this.grupos[indexGrupos].equipos[2])
    aux.push(this.grupos[indexGrupos].equipos[1])
    aux.push(this.grupos[indexGrupos].equipos[0])

    this.grupos[indexGrupos].equipos = aux

  }

  updatePartidos(grupo: string, equipo1: string, equipo2: string, fecha: string) {

    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-f" + fecha))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-f" + fecha))

    let indexGrupos = this.grupos.findIndex((element: { name: string; }) => element.name == grupo)
    let indexEquipo1 = this.grupos[indexGrupos].equipos.findIndex((element: { name: string; }) => element.name == equipo1)
    let indexEquipo2 = this.grupos[indexGrupos].equipos.findIndex((element: { name: string; }) => element.name == equipo2)

    this.grupos[indexGrupos].equipos[indexEquipo1].pj = this.grupos[indexGrupos].equipos[indexEquipo1].pj + 1
    this.grupos[indexGrupos].equipos[indexEquipo2].pj = this.grupos[indexGrupos].equipos[indexEquipo2].pj + 1

    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.grupos[indexGrupos].equipos[indexEquipo1].pe = this.grupos[indexGrupos].equipos[indexEquipo1].pe + 1
      this.grupos[indexGrupos].equipos[indexEquipo2].pe = this.grupos[indexGrupos].equipos[indexEquipo2].pe + 1
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        this.grupos[indexGrupos].equipos[indexEquipo1].pg = this.grupos[indexGrupos].equipos[indexEquipo1].pg + 1
        this.grupos[indexGrupos].equipos[indexEquipo2].pp = this.grupos[indexGrupos].equipos[indexEquipo2].pp + 1
      } else {
        this.grupos[indexGrupos].equipos[indexEquipo1].pp = this.grupos[indexGrupos].equipos[indexEquipo1].pp + 1
        this.grupos[indexGrupos].equipos[indexEquipo2].pg = this.grupos[indexGrupos].equipos[indexEquipo2].pg + 1
      }
    }

  }

  updatePuntos(grupo: string, equipo1: string, equipo2: string, fecha: string) {

    let pointsEquipo1: HTMLElement | null
    pointsEquipo1 = document.getElementById(equipo1 + "-points")
    let pointsEquipo2: HTMLElement | null
    pointsEquipo2 = document.getElementById(equipo2 + "-points")
    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-f" + fecha))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-f" + fecha))

    let indexGrupos = this.grupos.findIndex((element: { name: string; }) => element.name == grupo)
    console.log(this.grupos + '|' + indexGrupos + ': :' + grupo)
    let indexEquipo1 = this.grupos[indexGrupos].equipos.findIndex((element: { name: string; }) => element.name == equipo1)
    let indexEquipo2 = this.grupos[indexGrupos].equipos.findIndex((element: { name: string; }) => element.name == equipo2)

    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.grupos[indexGrupos].equipos[indexEquipo1].points = this.grupos[indexGrupos].equipos[indexEquipo1].points + 1
      this.grupos[indexGrupos].equipos[indexEquipo2].points = this.grupos[indexGrupos].equipos[indexEquipo2].points + 1
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        this.grupos[indexGrupos].equipos[indexEquipo1].points = this.grupos[indexGrupos].equipos[indexEquipo1].points + 3
      } else {
        this.grupos[indexGrupos].equipos[indexEquipo2].points = this.grupos[indexGrupos].equipos[indexEquipo2].points + 3
      }
    }

  }

  updateGoals(event:any,grupo: string, local: string, visitante: string, fecha: string) {

    let golesLocal: HTMLElement | null
    golesLocal = document.getElementById(local + "-gf")
    let golesVisitante: HTMLElement | null
    golesVisitante = document.getElementById(visitante + "-gc")
    let golesLocalInput: HTMLInputElement | null
    golesLocalInput = (<HTMLInputElement>document.getElementById(local + "-f" + fecha))

    let golesVisitanteInput: HTMLInputElement | null
    golesVisitanteInput = (<HTMLInputElement>document.getElementById(visitante + "-f" + fecha))


    let indexGrupos = this.grupos.findIndex((element: { name: string; }) => element.name == grupo)
    let index = this.grupos[indexGrupos].equipos.findIndex((element: { name: string; }) => element.name == local)

    this.grupos[indexGrupos].equipos[index].gf = this.grupos[indexGrupos].equipos[index].gf + parseInt(golesLocalInput.value)
    this.grupos[indexGrupos].equipos[index].gc = this.grupos[indexGrupos].equipos[index].gc + parseInt(golesVisitanteInput.value)

    index = this.grupos[indexGrupos].equipos.findIndex((element: { name: string; }) => element.name == visitante)

    this.grupos[indexGrupos].equipos[index].gf = this.grupos[indexGrupos].equipos[index].gf + parseInt(golesVisitanteInput.value)
    this.grupos[indexGrupos].equipos[index].gc = this.grupos[indexGrupos].equipos[index].gc + parseInt(golesLocalInput.value)

    event.target.disabled = true
    golesLocalInput.disabled = true
    golesVisitanteInput.disabled = true

  }

  updateGanadorOctavos(event: any, equipo1: any, equipo2: any, nombreArray: any, index: any, fase: string) {
    console.table(nombreArray)

    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-" + fase))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-" + fase))


    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.snackBar.openFromComponent(ModalAlertComponent, {
        duration: 1000,
      });
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        nombreArray[index].partido.ganador = equipo1
      } else {
        nombreArray[index].partido.ganador = equipo2
      }

      this.partidosOctavos.forEach((array: any) => {
        console.table(array)
      })
      this.partidosCuartos = this.cuartosFinal()

      golesEquipo2Input.disabled = true
      golesEquipo1Input.disabled = true
      event.target.disabled = true

    }




  }



  updateGanadorCuartos(event: any, equipo1: any, equipo2: any, nombreArray: any, index: any, fase: string) {
    console.table(nombreArray)

    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-" + fase))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-" + fase))

    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.snackBar.openFromComponent(ModalAlertComponent, {
        duration: 1000,
      });
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        nombreArray[index].partido.ganador = equipo1
      } else {
        nombreArray[index].partido.ganador = equipo2
      }

      this.partidosCuartos.forEach((array: any) => {
        console.table(array)
      })
      this.partidosSemi = this.semiFinal()

      golesEquipo2Input.disabled = true
      golesEquipo1Input.disabled = true
      event.target.disabled = true

    }




  }

  updateGanadorSemi(event: any, equipo1: any, equipo2: any, nombreArray: any, index: any, fase: string) {
    console.table(nombreArray)

    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-" + fase))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-" + fase))

    let perdedor=''

    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.snackBar.openFromComponent(ModalAlertComponent, {
        duration: 1000,
      });
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        nombreArray[index].partido.ganador = equipo1
        perdedor=equipo2
      } else {
        nombreArray[index].partido.ganador = equipo2
        perdedor=equipo1
      }
      
      this.partidosFinal = this.final()
      if(this.partidosTercer[0].equipo1==''){
        this.partidosTercer[0].equipo1=perdedor
      }else{
        this.partidosTercer[0].equipo2=perdedor
      }

      console.table(this.partidosTercer)

      golesEquipo2Input.disabled = true
      golesEquipo1Input.disabled = true
      event.target.disabled = true

    }
  }

  updateGanadorFinal(event: any, equipo1: any, equipo2: any, nombreArray: any, index: any, fase: string) {
    console.table(nombreArray)

    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-" + fase))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-" + fase))
    
    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.snackBar.openFromComponent(ModalAlertComponent, {
        duration: 1000,
      });
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        nombreArray[index].partido.ganador = equipo1
      } else {
        nombreArray[index].partido.ganador = equipo2
      }
  
      this.partidosFinal.forEach((array: any) => {
        console.table(array)
      })
      this.ganador = nombreArray[index].partido.ganador

      golesEquipo2Input.disabled = true
      golesEquipo1Input.disabled = true
      event.target.disabled = true

      this.openDialog()
    }
    

  }

  updateGanadorTercer(event: any, equipo1: any, equipo2: any, nombreArray: any, index: any, fase: string) {
    console.table(nombreArray)

    let golesEquipo1Input: HTMLInputElement | null
    golesEquipo1Input = (<HTMLInputElement>document.getElementById(equipo1 + "-" + fase))

    let golesEquipo2Input: HTMLInputElement | null
    golesEquipo2Input = (<HTMLInputElement>document.getElementById(equipo2 + "-" + fase))
    
    if (golesEquipo1Input.value == golesEquipo2Input.value) {
      this.snackBar.openFromComponent(ModalAlertComponent, {
        duration: 1000,
      });
    } else {
      if (golesEquipo1Input.value > golesEquipo2Input.value) {
        nombreArray[index].partido.ganador = equipo1
      } else {
        nombreArray[index].partido.ganador = equipo2
      }
  
      this.partidosTercer.forEach((array: any) => {
        console.table(array)
      })
      this.ganadorTercerPuesto = nombreArray[index].partido.ganador
      
      golesEquipo2Input.disabled = true
      golesEquipo1Input.disabled = true
      event.target.disabled = true

    }
    

  }

  octavosFinal() {
    let partido1: Partido = {
      equipo1: this.grupos[0].equipos[0].name,
      equipo2: this.grupos[1].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido2: Partido = {
      equipo1: this.grupos[2].equipos[0].name,
      equipo2: this.grupos[3].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido3: Partido = {
      equipo1: this.grupos[3].equipos[0].name,
      equipo2: this.grupos[2].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido4: Partido = {
      equipo1: this.grupos[1].equipos[0].name,
      equipo2: this.grupos[0].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido5: Partido = {
      equipo1: this.grupos[4].equipos[0].name,
      equipo2: this.grupos[5].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido6: Partido = {
      equipo1: this.grupos[6].equipos[0].name,
      equipo2: this.grupos[7].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido7: Partido = {
      equipo1: this.grupos[5].equipos[0].name,
      equipo2: this.grupos[4].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido8: Partido = {
      equipo1: this.grupos[7].equipos[0].name,
      equipo2: this.grupos[6].equipos[1].name,
      golesEquipo1: 0,
      golesEquipo2: 0,
      ganador: ''
    }

    let octavos = [
      { partido: partido1 },
      { partido: partido2 },
      { partido: partido3 },
      { partido: partido4 },
      { partido: partido5 },
      { partido: partido6 },
      { partido: partido7 },
      { partido: partido8 }


    ];

    this.partidosOctavos = octavos
    return octavos;

  }

  cuartosFinal() {
    let octavos = this.partidosOctavos
    let partido1: Partido =
    {
      equipo1: octavos[4].partido.ganador,
      golesEquipo1: 0,
      equipo2: octavos[6].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido2: Partido =
    {
      equipo1: octavos[0].partido.ganador,
      golesEquipo1: 0,
      equipo2: octavos[2].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido3: Partido =
    {
      equipo1: octavos[5].partido.ganador,
      golesEquipo1: 0,
      equipo2: octavos[7].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido4: Partido =
    {
      equipo1: octavos[1].partido.ganador,
      golesEquipo1: 0,
      equipo2: octavos[3].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }

    let cuartos = [
      { partido: partido1 },
      { partido: partido2 },
      { partido: partido3 },
      { partido: partido4 }
    ];

    this.partidosCuartos = cuartos

    return cuartos;
  }

  semiFinal() {
    let cuartos = this.partidosCuartos
    let partido1: Partido =
    {
      equipo1: cuartos[0].partido.ganador,
      golesEquipo1: 0,
      equipo2: cuartos[1].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }

    let partido2: Partido =
    {
      equipo1: cuartos[2].partido.ganador,
      golesEquipo1: 0,
      equipo2: cuartos[3].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }

    let semi = [
      { partido: partido1 },
      { partido: partido2 },
    ];

    this.partidosSemi = semi
    return semi;

  }

  final() {
    let semifinal = this.partidosSemi
    let finalMatch: Partido =
    {
      equipo1: semifinal[0].partido.ganador,
      golesEquipo1: 0,
      equipo2: semifinal[1].partido.ganador,
      golesEquipo2: 0,
      ganador: ''
    }



    let final = [
      { partido: finalMatch }
    ];

    this.partidosFinal = final
    console.log("El ganador es :"+this.ganador)      

    return final;

  }

  partidosGrupoA() {

    let partidos: { grupo: string, fecha: number; equipo1: string; equipo2: string; }[] = []

    this.groups.forEach((elem, index) => {
      this.logicaFaseGrupos.forEach(rec => {
        partidos.push({
          grupo: elem,
          fecha: rec.fecha,
          equipo1: this.grupos[index].equipos[rec.equipo1].name,
          equipo2: this.grupos[index].equipos[rec.equipo2].name,
        })
      })
    })


    return partidos;

  }

  creatingObserversForFirstGroupData() {
    of(true)
      .pipe(
        tap(() => {
          console.log(
            `Observer 1 is going to subscribe at ${new Date().toUTCString()}`
          );
          this.groupsService.groupData$.subscribe(
            (value) => {
              value
              //console.log(`Observer 1 has received`, value)
            },
            (err) => console.log(err),
            () => console.log('Observer1 has completed')
          );
        }),
        delay(1000),
        /*tap(() => {
          console.log(
            `Observer 2 is going to subscribe at ${new Date().toUTCString()}`
          );
          this.groupsService.groupData$.subscribe(
            (value) => console.log(`Observer 2 has received`, value),
            (err) => console.log(err),
            () => console.log('Observer2 has completed')
          );
        })*/
      )
      .subscribe();
  }


}


