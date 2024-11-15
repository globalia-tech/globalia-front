import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiSetting } from '../../../../../settings/apisetting';
import { catchError, Observable, throwError } from 'rxjs';
import { AsistenciaGetAll } from '../interface/asistencia.interface';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private http = inject(HttpClient)
  private url:string = apiSetting.apiUrl;

  constructor() { }

  getAll(id:number):Observable<AsistenciaGetAll>{
    return this.http.get<AsistenciaGetAll>(`${this.url}/asistencia/grado/${id}`)
  }
  saveAsistencia(data:AsistenciaGetAll): Observable<AsistenciaGetAll>{
    return this.http.post<AsistenciaGetAll>(`${this.url}/asistencia/add`,data).pipe(
      catchError(error => {
        console.error('Error al guardar la asistencia:', error);
        return throwError(() => new Error('No se pudo guardar la asistencia. Inténtelo de nuevo más tarde.'));
      })
    );
  }

}
