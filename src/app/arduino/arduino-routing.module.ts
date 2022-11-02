import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoModulosComponent } from './pages/listado-modulos/listado-modulos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { HomeComponent } from './pages/home/home.component';
import { ExportarGuiaComponent } from './pages/exportar-guia/exportar-guia.component';
import { PrimerosPasosComponent } from './pages/primeros-pasos/primeros-pasos.component';


const routes: Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'inicio', component:InicioComponent},
      {path:'listado', component:ListadoModulosComponent},      
      {path:'contacto', component:ContactoComponent},
      {path:':id', component:ModulosComponent},
      {path:'exportar/:id', component:ExportarGuiaComponent},
      {path:'primeros-pasos/:id', component:PrimerosPasosComponent},
      {path:'**', redirectTo: 'inicio'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ArduinoRoutingModule { }
