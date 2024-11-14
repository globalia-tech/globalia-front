export interface GradeRegister {
   id?: number ,
   aula: Aula;
   curso: Curso;
   turno: Turno;
   materia: Materia;
   profesor: number;
   profesorNombre: string
 }

 export type Aula = 'A' | 'B' | 'C';
 export type Curso = 'PRIMERO' | 'SEGUNDO' | 'TERCERO' | 'CUARTO' | 'QUINTO' | 'SEXTO';
 export type Turno = 'MAÑANA' | 'TARDE' | 'NOCHE';
 export type Materia = 'MATEMATICAS' | 'CIENCIAS' | 'LENGUAJE' | 'HISTORIA';

