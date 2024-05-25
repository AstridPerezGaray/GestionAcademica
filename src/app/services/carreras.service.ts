import { HttpClient } from '@angular/common/http'; 
import { Injectable, inject } from '@angular/core'; 
import { endpoints } from '../utils/endpoints'; 
import { Carrera } from '../interfaces/carrera.interface'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class CarrerasService { 
  private readonly http = inject(HttpClient); 
 
  constructor() { } 
 
  obtenerCarrera() { 
    return this.http.get<Carrera[]>(endpoints.obtenerCarrera); 
  } 
} 


  