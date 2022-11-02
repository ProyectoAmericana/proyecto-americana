import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Modulo } from '../../interfaces/arduino.interface';
import { ArduinoService } from '../../service/arduino.service';
import { PrimeIcons } from "primeng/api";

import * as AOS from 'aos'

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  icono = PrimeIcons.COG;
  modulo!: Modulo;
  responsiveOptions;
  mostrarTemplate: boolean = false;
  idModulo!: string;
  //leer el url
  constructor(private activatedRoute: ActivatedRoute,
              private arduinoService: ArduinoService,
              private router: Router) { 
                this.responsiveOptions = [
                  {
                      breakpoint: '768px',
                      numVisible: 2,
                      numScroll: 2
                  },
                  {
                      breakpoint: '680px',
                      numVisible: 1,
                      numScroll: 1
                  }
              ];
              }

  ngOnInit(): void {
    AOS.init({
    
    });

    //suscribirme y desestructurar
    this.activatedRoute.params
      .pipe(
          switchMap( ({id}) => this.arduinoService.getModuloPorId(id) )
          )
      .subscribe(modulo => {
        this.modulo = modulo;
        this.idModulo = modulo.id
       });

  }

  regresar(){
    this.router.navigate(['/listado'])
  }

  toSection1(){
    document.getElementById("section1")?.scrollIntoView({behavior:"smooth"});
  }

  exportarGuia(){
    const url = this.router.serializeUrl(this.router.createUrlTree(['/exportar/' + this.idModulo]));
    window.open(url, '_blank');
  }
}
