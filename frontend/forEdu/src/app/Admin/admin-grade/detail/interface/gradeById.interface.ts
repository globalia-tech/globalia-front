export interface GradeByID {
    estado:  boolean;
    message: string;
    data:    Data;
}

export interface Data {
    id:             number;
    aula:           string;
    curso:          string;
    turno:          string;
    materia:        string;
    profesor:       number;
    profesorNombre: string;
}
