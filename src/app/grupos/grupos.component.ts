import { Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {Grupo,Equipo, Partido} from '../Interfaces';

var EQUIPOS_GRUPO_A: Equipo[] = [
  {name: 'Qatar',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Holanda',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Senegal',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Ecuador',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_B: Equipo[] = [
  {name: 'Inglaterra',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'USA',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Iran',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Escocia, Gales o Ucrania',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_C: Equipo[] = [
  {name: 'Argentina',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'México',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Polonia',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Arabia Saudita',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_D: Equipo[] = [
  {name: 'Francia',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Dinamarca',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Túnez',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Emiratos Árabes Unidos, Australia o Perú',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_E: Equipo[] = [
  {name: 'España',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Alemania',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Japón',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Costa Rica o Nueva Zelanda',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_F: Equipo[] = [
  {name: 'Bélgica',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Croacia',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Marruecos',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Canadá',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_G: Equipo[] = [
  {name: 'Brasil',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Suiza',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Serbia',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Camerún',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var EQUIPOS_GRUPO_H: Equipo[] = [
  {name: 'Portugal',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Uruguay',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Corea del Sur',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0},
  {name: 'Ghana',pj:0,pg:0,pe:0,gf:0,gc:0,puntos:0}
];

var GRUPOS: Grupo[] = [
  {
    name:"A",
    equipos:EQUIPOS_GRUPO_A
  },
  {
    name:"B",
    equipos:EQUIPOS_GRUPO_B
  },
  {
    name:"C",
    equipos:EQUIPOS_GRUPO_C
  },
  {
    name:"D",
    equipos:EQUIPOS_GRUPO_D
  },
  {
    name:"E",
    equipos:EQUIPOS_GRUPO_E
  },
  {
    name:"F",
    equipos:EQUIPOS_GRUPO_F
  },
  {
    name:"G",
    equipos:EQUIPOS_GRUPO_G
  },
  {
    name:"H",
    equipos:EQUIPOS_GRUPO_H
  }
]


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})


export class GruposComponent implements OnInit {
  grupos:any
  isActive = false;
  partidosOctavos:any=[]

  constructor() { 
    this.grupos=[]
  }

  ngOnInit(): void {
    this.grupos=GRUPOS
    this.grupos.forEach((elem: Grupo)=>{
      console.log("Grupo :"+elem.name)
    })


  }

  updateGoals(grupo:string,local: any,visitante:any) {
    let id=local.target.id.split('-')[0]
    console.log(id+":"+local.target.value)
    let golesLocal:HTMLElement | null
    golesLocal=document.getElementById(id+"-gf")
    let golesVisitante:HTMLElement | null
    golesVisitante=document.getElementById(visitante+"-gc")
    let golesLocalInput:HTMLInputElement | null
    golesLocalInput=(<HTMLInputElement>document.getElementById(id))

    let golesVisitanteInput:HTMLInputElement | null
    golesVisitanteInput=(<HTMLInputElement>document.getElementById(visitante+"-f1"))


    let indexGrupos=GRUPOS.findIndex(element=>element.name==grupo)
    let index=GRUPOS[indexGrupos].equipos.findIndex(element=>element.name==id)
    GRUPOS[indexGrupos].equipos[index].gf=parseInt(golesLocal?.textContent!)+1
    index=GRUPOS[indexGrupos].equipos.findIndex(element=>element.name==visitante)
    GRUPOS[indexGrupos].equipos[index].gc=parseInt(golesVisitante?.textContent!)+1
   
    
  }

  octavosFinal(){
    let partido1:Partido={
      equipo1:GRUPOS[0].equipos[0].name,
      equipo2:GRUPOS[1].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Qatar'
    }

    let partido2:Partido={
      equipo1:GRUPOS[2].equipos[0].name,
      equipo2:GRUPOS[3].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Argentina'
    }

    let partido3:Partido={
      equipo1:GRUPOS[3].equipos[0].name,
      equipo2:GRUPOS[2].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Francia'
    }

    let partido4:Partido={
      equipo1:GRUPOS[1].equipos[0].name,
      equipo2:GRUPOS[0].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Inglaterra'
    }

    let partido5:Partido={
      equipo1:GRUPOS[4].equipos[0].name,
      equipo2:GRUPOS[5].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'España'
    }

    let partido6:Partido={
      equipo1:GRUPOS[6].equipos[0].name,
      equipo2:GRUPOS[7].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Brasil'
    }

    let partido7:Partido={
      equipo1:GRUPOS[5].equipos[0].name,
      equipo2:GRUPOS[4].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Belgica'
    }

    let partido8:Partido={
      equipo1:GRUPOS[7].equipos[0].name,
      equipo2:GRUPOS[6].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:'Portugal'
    }
    
    let octavos=[
      {partido:partido1},
      {partido:partido2},
      {partido:partido3},
      {partido:partido4},
      {partido:partido5},
      {partido:partido6},
      {partido:partido7},
      {partido:partido8}


    ];

    console.log(octavos[0].partido.equipo1)
    this.partidosOctavos=octavos
    return octavos;

  }

  cuartosFinal(){
    let octavos=this.octavosFinal()
    let partido1:Partido=
      {
        equipo1:octavos[4].partido.ganador,
        golesEquipo1:0,
        equipo2:octavos[6].partido.ganador,
        golesEquipo2:0,
        ganador:'España'
      }

      let partido2:Partido=
      {
        equipo1:octavos[0].partido.ganador,
        golesEquipo1:0,
        equipo2:octavos[2].partido.ganador,
        golesEquipo2:0,
        ganador:'Qatar'
      }

      let partido3:Partido=
      {
        equipo1:octavos[5].partido.ganador,
        golesEquipo1:0,
        equipo2:octavos[7].partido.ganador,
        golesEquipo2:0,
        ganador:'Brasil'
      }

      let partido4:Partido=
      {
        equipo1:octavos[1].partido.ganador,
        golesEquipo1:0,
        equipo2:octavos[3].partido.ganador,
        golesEquipo2:0,
        ganador:'Belgica'
      }

      let cuartos=[
        {partido:partido1},
        {partido:partido2},
        {partido:partido3},
        {partido:partido4}
      ];

      return cuartos;
  }

  semiFinal(){
    let cuartos=this.cuartosFinal()
    let partido1:Partido=
      {
        equipo1:cuartos[0].partido.ganador,
        golesEquipo1:0,
        equipo2:cuartos[1].partido.ganador,
        golesEquipo2:0,
        ganador:'España'
      }

      let partido2:Partido=
      {
        equipo1:cuartos[2].partido.ganador,
        golesEquipo1:0,
        equipo2:cuartos[3].partido.ganador,
        golesEquipo2:0,
        ganador:'Brasil'
      }

      let semi=[
        {partido:partido1},
        {partido:partido2},
      ];
      
      return semi;
  
  }

  final(){
    let semifinal=this.semiFinal()
    let finalMatch:Partido=
      {
        equipo1:semifinal[0].partido.ganador,
        golesEquipo1:0,
        equipo2:semifinal[1].partido.ganador,
        golesEquipo2:0,
        ganador:''
      }

      

      let final=[
        {partido:finalMatch}
      ];
      
      return final;
  
  }

  partidosGrupoA(){
    let grupo:Grupo=GRUPOS[0];
    this.grupos[0].name;
    
    let partido1:Partido={
      equipo1:GRUPOS[0].equipos[0].name,
      equipo2:GRUPOS[0].equipos[1].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:''
    }

    let partido2:Partido={
      equipo1:GRUPOS[0].equipos[0].name,
      equipo2:GRUPOS[0].equipos[2].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:''
    }

    let partido3:Partido={
      equipo1:GRUPOS[0].equipos[0].name,
      equipo2:GRUPOS[0].equipos[3].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:''

    }

    let partido4:Partido={
      equipo1:GRUPOS[0].equipos[1].name,
      equipo2:GRUPOS[0].equipos[2].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:''
    }

    let partido5:Partido={
      equipo1:GRUPOS[0].equipos[1].name,
      equipo2:GRUPOS[0].equipos[3].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:''
    }

    let partido6:Partido={
      equipo1:GRUPOS[0].equipos[2].name,
      equipo2:GRUPOS[0].equipos[3].name,
      golesEquipo1:0,
      golesEquipo2:0,
      ganador:''
    }

    let partidos:Partido[]=[
      partido1,
      partido2,
      partido3,
      partido4,
      partido5,
      partido6
    ]

  }


}


