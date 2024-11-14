import { Component, Input, OnInit } from '@angular/core';
import { CardEventComponent } from '../../../components/card-event/card-event.component';
import { CardEventBodyComponent } from '../../../components/card-event-body/card-event-body.component';
import { NewsGradeComponent } from '../news-grade/news-grade.component';
import { AsistenciaComponent } from "../asistencia/asistencia.component";
import { CalendarComponent } from "../../admin-calendar/calendar/calendar.component";
import { GradeByID } from './interface/gradeById.interface';
import { ActivatedRoute } from '@angular/router';
import { GradeByIdService } from './service/gradeById.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CardEventComponent,
    CardEventBodyComponent,
    NewsGradeComponent,
    AsistenciaComponent,
    CalendarComponent
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'] // Corrección aquí
})
export class DetailComponent implements OnInit {

  public gradeId: number | undefined;
  public grade!: GradeByID;
  public tablaActual: string = "comunicaciones";

  // Asignación del servicio a una propiedad
  constructor(
    private route: ActivatedRoute,
    private gradeService: GradeByIdService // Corrección aquí
  ) {}

  // Método para obtener detalles del grado por ID
  gradeById(id: number) {
    this.gradeService.gradeDetail(id).subscribe({
      next: (response) => {
        this.grade = response;
       
      },
      error: (err) => console.error('Error al obtener detalles del grado:', err)
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la ruta
    this.gradeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.gradeId) {
      this.gradeById(this.gradeId);
    }
  }

  // Método para cambiar la tabla visible
  mostrarTabla(tabla: string) {
    this.tablaActual = tabla;
  }
}
