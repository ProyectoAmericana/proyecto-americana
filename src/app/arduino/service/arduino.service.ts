import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulo } from '../interfaces/arduino.interface';



@Injectable({
  providedIn: 'root'
})
export class ArduinoService {

  constructor(private http: HttpClient) { }
 
  getModulos(): Observable<Modulo[]>{
    //return this.http.get<Modulo[]>('http://localhost:3000/modulos');
     return this.http.get<Modulo[]>('https://api.npoint.io/1d88cdf6c993ca677f1f/modulos/');
  }

  getModuloPorId(id: string): Observable<Modulo>{
    //return this.http.get<Modulo>(`http://localhost:3000/modulos/${id}`);
     var idModulo = Number(id) - 1
     return this.http.get<Modulo>(`https://api.npoint.io/1d88cdf6c993ca677f1f/modulos/${idModulo}`);
  }

  getSugerencias(termino: string){
    return this.http.get<Modulo[]>(`http://localhost:3000/modulos?q=${termino}&_limit=6`); 
  }

}
