import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiSetting } from '../../../../../settings/apisetting';
import { Observable } from 'rxjs';
import { GradeByID } from '../interface/gradeById.interface';

@Injectable({
  providedIn: 'root'
})
export class GradeByIdService {

  constructor() { }

  private http = inject(HttpClient);
  private url: string = apiSetting.apiUrl;

  gradeDetail(id:number): Observable<GradeByID>{
    return this.http.get<GradeByID>(`${this.url}/grado/${id}`)

  }

}
