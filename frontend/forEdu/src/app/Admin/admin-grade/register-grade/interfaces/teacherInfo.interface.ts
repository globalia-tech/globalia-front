export interface TeacherInfo {
    id: number;
    nombre: string;
    apellido: string;
  }

  export interface TeachergetALl {
    estado:       boolean;
    message:      string;
    dataIterable: DataIterable[];
}

export interface DataIterable {
    id:              number;
    email:           string;
    nombre:          string;
    tipoDocumento:   string;
    dni:             string;
    apellido:        string;
    telefono:        string;
    institucion:     string;
    rol:             string;
    activo:          boolean;
    materia:         string;
    estudianteIds:   number[];
    boletinIds:      number[];
    asistenciaIds:   number[];
    tareaIds:        number[];
    calificacionIds: number[];
    gradoIds:        number[];
}
