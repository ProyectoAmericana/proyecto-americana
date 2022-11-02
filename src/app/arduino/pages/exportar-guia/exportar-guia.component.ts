import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import { switchMap, Observable } from 'rxjs';
import { Modulo } from '../../interfaces/arduino.interface';
import { ArduinoService } from '../../service/arduino.service';
import { PrimeIcons } from "primeng/api"; 
@Component({
  selector: 'app-exportar-guia',
  templateUrl: './exportar-guia.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./exportar-guia.component.css']
})
export class ExportarGuiaComponent implements OnInit {

  icono = PrimeIcons.COG;
  modulo!: Modulo;
  @ViewChild('pdf') pdf!: PDFExportComponent;

  constructor(private activatedRoute: ActivatedRoute,
    private arduinoService: ArduinoService,
    private router: Router) { }

  ngOnInit(): void {
      //suscribirme y desestructurar
      this.activatedRoute.params
      .pipe(
          switchMap( ({id}) => this.arduinoService.getModuloPorId(id) )
          )
      .subscribe(modulo => {
        this.modulo = modulo;
        this.exportPDF();
       });

      
      
  }

  exportPDF(){
    this.asyncObservable().pipe().subscribe(() => this.pdf.saveAs( this.modulo.practica + '.pdf'));
  }

  asyncObservable(): Observable<any>{
    return new Observable(obs =>{
      setTimeout(() => {
        obs.next();
      },2000);
    })
  }
}
