import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HomeComponent } from './arduino/pages/home/home.component';
import { InicioComponent } from './arduino/pages/inicio/inicio.component';
import { ListadoModulosComponent } from './arduino/pages/listado-modulos/listado-modulos.component';
import { ContactoComponent } from './arduino/pages/contacto/contacto.component';
import { ModulosComponent } from './arduino/pages/modulos/modulos.component';
import { ExportarGuiaComponent } from './arduino/pages/exportar-guia/exportar-guia.component';
import { PrimerosPasosComponent } from './arduino/pages/primeros-pasos/primeros-pasos.component';





  
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    PrimeNgModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
