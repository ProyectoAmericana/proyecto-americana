import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    AOS.init({
      duration:2800,
      once:false,
      mirror: true
    });
  }

}
