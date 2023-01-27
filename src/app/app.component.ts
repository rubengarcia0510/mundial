import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mundial';
  isLogued:boolean = false;

  procesaPropagar(mensaje:boolean) {
    this.isLogued=mensaje;
    console.log(mensaje);
  }
}
