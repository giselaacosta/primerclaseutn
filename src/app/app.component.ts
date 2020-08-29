import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'primerclaseutn';
  public number1 : number;
  public number2 : number;
  public result1 : number;
  public result2 : number;

  constructor(private location: Location) {}
  public calc(){
    this.result1 = (this.number1 + this.number2)/2
    this.result2 = this.number1 + this.number2

  }

  public limpiar(){
    location.reload();


  }

}



