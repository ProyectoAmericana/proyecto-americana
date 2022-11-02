import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { PDFExportModule } from "@progress/kendo-angular-pdf-export";

import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ArduinoRoutingModule } from './arduino-routing.module';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { ListadoModulosComponent } from './pages/listado-modulos/listado-modulos.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { ArduinoTargetaComponent } from './components/arduino-targeta/arduino-targeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ExportarGuiaComponent } from './pages/exportar-guia/exportar-guia.component';
import { PrimerosPasosComponent } from './pages/primeros-pasos/primeros-pasos.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    InicioComponent,
    HomeComponent,
    ContactoComponent,
    ModulosComponent,
    ListadoModulosComponent,
    FooterComponent,
    ArduinoTargetaComponent,
    ImagenPipe,
    FiltroPipe,
    ExportarGuiaComponent,
    PrimerosPasosComponent 
  ],
  imports: [
    CommonModule,
    ArduinoRoutingModule,
    FlexLayoutModule,
    FormsModule,

    PDFExportModule,
    MaterialModule,
    PrimeNgModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ]
})
export class ArduinoModule { }
