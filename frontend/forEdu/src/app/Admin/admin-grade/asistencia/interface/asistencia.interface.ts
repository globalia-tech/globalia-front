export interface AsistenciaGetAll {
    estado:       boolean;
    message:      string;
    dataIterable: DataIterable[];
}

export interface DataIterable {
    id:                   number;
    asistio:              boolean;
    contadorClases:       boolean;
    contadorTotal:        number;
    asistenciaAlumno:     number;
    fecha:                Date;
    observaciones:        string;
    porcentajeAsistencia: number;
    profesor:             number;
    estudiante:           number;
    estudianteNombre:     string
    grado:                number;

}
