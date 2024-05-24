import { environment } from "../../environments/environment.development";

export const endpoints = {
    /****ESTUDIANTES****/
    agregarEstudiante : environment.serverURL.concat("api/estudiantes/agregarEstudiante"),
    actualizarEstudiante : environment.serverURL.concat("api/estudiantes/actualizarEstudiante"),
    eliminarEstudainte : environment.serverURL.concat("api/estudiantes/eliminarEstudainte"),
    obtenerEstudiantesPorID : environment.serverURL.concat("api/estudiantes/obtenerEstudiantesPorID"),
    obetenerEstudiantes : environment.serverURL.concat("api/estudiantes/obtenerEstudiantes")
    /*******************/
};
