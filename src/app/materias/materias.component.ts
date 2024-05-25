import { Component, inject } from '@angular/core'; 
import { EstudiantesService } from '../services/estudiantes.service'; 
import { CommonModule } from '@angular/common'; 
import { Materia } from '../interfaces/materia.interface'; 
import { MateriasService } from '../services/materias.service';
 
@Component({ 
  selector: 'app-materias', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './materias.component.html', 
  styleUrl: './materias.component.scss' 
}) 
export class MateriasComponent { 
 
  // Haciendo inyeccion de dependencia 
  private readonly materiasService = inject(MateriasService); 
  public lstMateria: Materia[]; 
 
  constructor(){ 
    this.lstMateria = []; 
    this.getAllMateria(); 
  } 
 
  getAllMateria(){ 
    this.materiasService.obtenerMateria().subscribe({ 
      // Se evalua que la respuesta del endpoint sea exitosa 
      next: (temp) => { 
        // Se asigna la lista al arreglo anteriormente descrito 
        this.lstMateria = temp; 
      }, 
      // En caso de error 
      error: (err) => { 
        console.log("No se pudo obtener informacion"); 
      } 
    }) 
  } 
} 