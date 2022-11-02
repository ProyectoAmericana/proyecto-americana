import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  exportarGuia(nombreGuia:string){
    const url = this.router.serializeUrl(this.router.createUrlTree(['/primeros-pasos/' + nombreGuia]));
    window.open(url, '_blank');
  }

}
