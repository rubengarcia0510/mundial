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
    console.log(this.logued)
    this.logued=true;
    this.propagar.emit(this.logued);
  }

}
