import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../../service/arduino.service';
import { Modulo } from '../../interfaces/arduino.interface';
import { SelectItem } from 'primeng/api';
import { ErrorPageComponent } from '../../../shared/error-page/error-page.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-listado-modulos',
  templateUrl: './listado-modulos.component.html',
  styleUrls: ['./listado-modulos.component.css']
})
export class ListadoModulosComponent implements OnInit {

  modulos: Modulo[] = [];
  page: number = 0;
  search: string = '';
 carga: boolean = true;
  
  constructor(private arduinoService: ArduinoService) { }

  ngOnInit(): void {
    this.arduinoService.getModulos()
      .subscribe(
        (modulos) => {this.modulos = modulos;
        this.carga= false;}
        );
    
    AOS.init({
      });
  }


  nextPage() {
    this.page += 8;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 8;
  }

  onSearch( search: string ) {
    this.page = 0;
    this.search = search;
  }

}
