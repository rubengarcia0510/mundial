export interface Equipo {
    name: string;
    pj:number;
    pg:number;
    pp:number;
    pe:number;
    gf:number;
    gc:number;
    points:number;
  }
  
  export interface Grupo{
    name:string;
    teams: Equipo[];
  }

  export interface Partido{
    equipo1:string;
    golesEquipo1:number;
    equipo2:string;
    golesEquipo2:number;
    ganador:string;
  }

  export interface Bandera{
    country:string;
    flag:string;
  }

  export interface Ganador {
    name: string;
  }