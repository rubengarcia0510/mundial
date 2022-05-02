import { Injectable } from '@angular/core';
import { Bandera } from './Interfaces';

const flag: Bandera[] = [
  { country: "alemania", flag: "de" },
  { country: "arabia saudita", flag: "sa" },
  { country: "argentina", flag: "ar" },
  { country: "belgica", flag: "be" },
  { country: "brasil", flag: "br" },
  { country: "camerun", flag: "cm" },
  { country: "canada", flag: "ca" },
  { country: "corea del sur", flag: "kp" },
  { country: "costa rica", flag: "cr" },
  { country: "croacia", flag: "hr" },
  { country: "dinamarca", flag: "dk" },
  { country: "ecuador", flag: "ec" },
  { country: "emiratos arabes unidos", flag: "ae" },
  { country: "escocia", flag: "gb-sct" },
  { country: "españa", flag: "es" },
  { country: "francia", flag: "fr" },
  { country: "gales", flag: "gb-wls" },
  { country: "ghana", flag: "gh" },
  { country: "holanda", flag: "nl" },
  { country: "inglaterra", flag: "gb" },
  { country: "iran", flag: "ir" },
  { country: "japon", flag: "jp" },
  { country: "marruecos", flag: "ma" },
  { country: "mexico", flag: "mx" },
  { country: "nueva zelanda", flag: "nz" },
  { country: "polonia", flag: "pl" },
  { country: "portugal", flag: "pt" },
  { country: "qatar", flag: "qa" },
  { country: "senegal", flag: "sn" },
  { country: "serbia", flag: "se" },
  { country: "suiza", flag: "ch" },
  { country: "tunez", flag: "tn" },
  { country: "ucrania", flag: "ua" },
  { country: "uruguay", flag: "uy" },
  { country: "usa", flag: "us" }
]

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor() { }

  getFlag(country:string){
    let pais:string=country.toLocaleLowerCase()
    let result = flag.findIndex(element => element.country == pais)

    return flag[result].flag
    
  }

  getFlags():Bandera[]{
    return flag;
  }

  
}
