export interface Equipo {
    name: string;
    pj:number;
    pg:number;
    pp:number;
    pe:number;
    gf:number;
    gc:number;
    puntos:number;
  }
  
  export interface Grupo{
    name:string;
    equipos: Equipo[];
  }

  export interface Partido{
    equipo1:string;
    golesEquipo1:number;
    equipo2:string;
    golesEquipo2:number;
    ganador:string;
  }