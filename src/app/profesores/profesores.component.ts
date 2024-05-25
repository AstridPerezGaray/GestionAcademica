import { Component, inject } from '@angular/core'; 
import { ProfesoresService } from '../services/profesores.service'; 
import { CommonModule } from '@angular/common'; 
import { Profesor } from '../interfaces/profesor.interface'; 
 
@Component({ 
  selector: 'app-profesores', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './profesores.component.html', 
  styleUrl: './profesores.component.scss' 
}) 
export class ProfesorComponent { 
 
  // Haciendo inyeccion de dependencia 
  private readonly profesoresService = inject(ProfesoresService); 
  public lstProfesor: Profesor[]; 
 
  constructor(){ 
    this.lstProfesor = []; 
    this.getAllProfes(); 
  } 
 
  getAllProfes(){ 
    this.profesoresService.obtenerProfesor().subscribe({ 
      // Se evalua que la respuesta del endpoint sea exitosa 
      next: (temp) => { 
        // Se asigna la lista al arreglo anteriormente descrito 
        this.lstProfesor = temp; 
      }, 
      // En caso de error 
      error: (err) => { 
        console.log("No se pudo obtener informacion"); 
      } 
    }) 
  } 
} 