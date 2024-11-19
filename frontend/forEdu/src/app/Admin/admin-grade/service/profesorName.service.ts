import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiSetting } from '../../../../settings/apisetting';
import { map, Observable } from 'rxjs';
import { DataIterable, TeachergetALl, TeacherInfo } from '../register-grade/interfaces/teacherInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfesorNameService {

  constructor() { }


  private http = inject(HttpClient);
  private url:string = apiSetting.apiUrl;

getTeachersInfo():Observable<TeacherInfo[]>{
  return this.http.get<TeachergetALl>(`${this.url}/profesor/getAll`).pipe(
    map((response) => response.dataIterable.map((teacher: DataIterable) => ({
    id: teacher.id,
    nombre: teacher.nombre,
    apellido: teacher.apellido
  })))
  )
}



}
