import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudiantesService } from './services/estudiantes.service';
import { CommonModule } from '@angular/common';
import { CarrerasService } from './services/carreras.service';
import { GruposService } from './services/grupos.service';
import { ProfesoresService } from './services/profesores.service';
import { MateriasService } from './services/materias.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GestionAcademica';

  private readonly estudiantesService = inject(EstudiantesService);
  private readonly carreraService = inject(CarrerasService);
  private readonly grupoService = inject(GruposService);
  private readonly materiasService = inject(MateriasService);
  private readonly profesorService = inject(ProfesoresService);

  //creando observable
  estudiantes$ = this.estudiantesService.obtenerEstdiantes();
  carrera$ = this.carreraService.obtenerCarreras();
  grupo$ = this.grupoService.obtenerGrupo();
  materia$ = this.materiasService.obtenerMaterias();
  profesor$ = this.profesorService.obtenerProfesor();
}

