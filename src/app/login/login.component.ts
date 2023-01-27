import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input()
  logued!: boolean;

  @Output() propagar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onPropagar() {
    let usuario: HTMLInputElement | null
    usuario = (<HTMLInputElement>document.getElementById('user'))
    let clave: HTMLInputElement | null
    clave = (<HTMLInputElement>document.getElementById('password'))
    if(usuario.value==""){
      alert("No ingresaste el usuario")
      return 1
    }
    if(clave.value==""){
      alert("No ingresaste la password")
      return 1
    }

    console.log(usuario.value)
    this.logued=true;
    this.propagar.emit(this.logued);
    return 0
    
  }

}
