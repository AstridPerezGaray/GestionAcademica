import { Component } from '@angular/core'; 
import { CarrerasService } from '../services/carreras.service'; 
import { Carrera } from '../interfaces/carrera.interface'; 

@Component({ 
  selector: 'app-carreras', 
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.scss'] // Cambiado a styleUrls
}) 
export class CarrerasComponent { 
  public lstCarrera: Carrera[]; 

  constructor(private carreraService: CarrerasService){ 
    this.lstCarrera = []; 
    this.getAllCarrera(); 
  } 

  getAllCarrera(){ 
    this.carreraService.obtenerCarrera().subscribe({ 
      next: (temp) => { 
        this.lstCarrera = temp; 
      }, 
      error: (err) => { 
        console.log("No se pudo obtener información"); 
      } 
    }) 
  } 
}
