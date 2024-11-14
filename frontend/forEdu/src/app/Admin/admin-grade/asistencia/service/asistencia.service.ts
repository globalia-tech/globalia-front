import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiSetting } from '../../../../../settings/apisetting';
import { Observable } from 'rxjs';
import { AsistenciaGetAll } from '../interface/asistencia.interface';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private http = inject(HttpClient)
  private url:string = apiSetting.apiUrl;

  constructor() { }

  getAll():Observable<AsistenciaGetAll>{
    return this.http.get<AsistenciaGetAll>(`${this.url}/asistencia/getAll`)
  }

}
