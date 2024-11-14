import { Component } from '@angular/core';
import { ModalUserInstitutionalService } from '../../../service/modal/modal-user-institutional.service';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenuItem } from './interface/items.interface';
import { AsistenciaService } from './service/asistencia.service';
import { AsistenciaGetAll, DataIterable } from './interface/asistencia.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  standalone: true,
  imports: [
    FormsModule,
    MenubarModule,
    SplitButtonModule,
    CommonModule,
    ToastModule
  ],
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],  // Corregido: styleUrl -> styleUrls
  providers: [MessageService]
})
export class AsistenciaComponent {
  public asistenciaAll: DataIterable[] = [];
  private asistenciaVerificacion: boolean = false;
  public asistenciaAllagrupada:any;
  public gradeId!: number;

  ngOnInit() {
    
    this.gradeId = Number(this.route.snapshot.paramMap.get('id'));
    this.asistenciaGetAll();
  }

  constructor(
    private modalUserInstitutionalService: ModalUserInstitutionalService,
    private messageService: MessageService,
    private asistenciaService: AsistenciaService,
    private route: ActivatedRoute,
  ) {}

  mostrarFechas(dia: string) {
    // Lógica para mostrar las fechas o hacer alguna acción cuando se selecciona un día
    console.log('Fecha seleccionada: ', dia);
  }

  trackById(index: number, item: DataIterable): number {
    return item.id;
  }

  checkAsistenciaDia(asistencia: DataIterable, diaSemana: string): boolean {
    const diasSemana: { [key: string]: number } = {
      lunes: 1,
      martes: 2,
      miércoles: 3,
      jueves: 4,
      viernes: 5
    };
    const fechaAsistencia = new Date(asistencia.fecha);
    const diaAsistencia = fechaAsistencia.getDay();
    
    // Comprobamos si el día de la fecha coincide con el día de la semana esperado
    return diaAsistencia === diasSemana[diaSemana] && asistencia.asistio;
  }

  asistenciaGetAll() {
    this.asistenciaService.getAll(this.gradeId).subscribe({
      next: (response) => {
        // Agrupar las asistencias por estudiante
        const groupedAsistencia: { [key: number]: any } = {};

        response.dataIterable.forEach((asistencia) => {
          const estudianteId = asistencia.estudiante;
          const porcentajeAsistencia = asistencia.porcentajeAsistencia;
          const fechaAsistencia = new Date(asistencia.fecha);
          const diaSemana = fechaAsistencia.getDay(); // 0 (domingo) a 6 (sábado)

          if (!groupedAsistencia[estudianteId]) {
            groupedAsistencia[estudianteId] = {
              nombre: asistencia.estudiante,
              porcentajeAsistencia:asistencia.porcentajeAsistencia,
              justificativo : asistencia.observaciones ? asistencia.observaciones: "N/A",
              grado : asistencia.grado,
              asistencia: {
                lunes: false,
                martes: false,
                miercoles: false,
                jueves: false,
                viernes: false
              }
            };
          }

          // Marcar la asistencia según el día de la semana
          switch (diaSemana) {
            case 1: // Lunes
              groupedAsistencia[estudianteId].asistencia.lunes = asistencia.asistio;
              break;
            case 2: // Martes
              groupedAsistencia[estudianteId].asistencia.martes = asistencia.asistio;
              break;
            case 3: // Miércoles
              groupedAsistencia[estudianteId].asistencia.miercoles = asistencia.asistio;
              break;
            case 4: // Jueves
              groupedAsistencia[estudianteId].asistencia.jueves = asistencia.asistio;
              break;
            case 5: // Viernes
              groupedAsistencia[estudianteId].asistencia.viernes = asistencia.asistio;
              break;
          }
        });

        // Convertir el objeto agrupado en un array de estudiantes
        this.asistenciaAllagrupada = Object.values(groupedAsistencia);
        console.log("asistenciaAll agrupada: ", this.asistenciaAllagrupada);
      },
      error: (err) => console.log("Error al obtener asistencia", err)
    });
  }

  openModal(user: any) {
    this.modalUserInstitutionalService.showModal(user);
  }

  isModalVisible = false;

  

  closeModal() {
    this.isModalVisible = false;
  }

  tablaActual: string = "administradores";

  mostrarTabla(tabla: string) {
    this.tablaActual = tabla;
  }

  asistencia() {
    return this.asistenciaVerificacion;
  }

  toggleAsistencia() {
    this.asistenciaVerificacion = !this.asistenciaVerificacion;
    if (this.asistenciaVerificacion) {
      this.messageService.add({severity: 'success', summary: 'Éxito', detail: 'Asistencia guardada con éxito'});
    } else {
      this.messageService.add({severity: 'warn', summary: 'Advertencia', detail: 'Asistencia no se ha guardado'});
    }
  }
}
