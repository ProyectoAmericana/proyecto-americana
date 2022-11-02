import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HomeComponent } from './arduino/pages/home/home.component';

const routes: Routes=[
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'',
    loadChildren: () => import('./arduino/arduino.module').then(x => x.ArduinoModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
