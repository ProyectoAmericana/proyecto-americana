import { Component, Input, OnInit } from '@angular/core';
import { Modulo } from '../../interfaces/arduino.interface';
import * as AOS from 'aos';

@Component({
  selector: 'app-arduino-targeta',
  templateUrl: './arduino-targeta.component.html',
  styleUrls: ['./arduino-targeta.component.css']
})
export class ArduinoTargetaComponent implements OnInit {

  @Input() modulo!: Modulo; //traer los datos del modulo del listadoComponent.

  constructor() { }

  ngOnInit(): void {
    AOS.init({
    });
  }

}
