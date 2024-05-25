import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component'; 
import { CarrerasComponent } from './carreras/carreras.component';
import { GruposComponent } from './grupos/grupos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesorComponent } from './profesores/profesores.component';

export const routes: Routes = [ 
    {path: 'Estudiante', component: EstudiantesComponent, pathMatch: 'full'}, // Ruta por defecto 
    {path: 'Carrera', component: CarrerasComponent, pathMatch: 'full'}, // Ruta por defecto 
    {path: 'Grupo', component: GruposComponent, pathMatch: 'full'}, // Ruta por defecto 
    {path: 'Materia', component: MateriasComponent, pathMatch: 'full'}, // Ruta por defecto 
    {path: 'Profesor', component: ProfesorComponent, pathMatch: 'full'}, // Ruta por defecto 
    {path: '**', redirectTo: '', pathMatch: 'full'} // Rutas no existentes 
]; 