import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent implements OnInit {

  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
 
  items: MenuItem[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command: () => this.router.navigate(['/dashboard/']) 
      },
      {
        label: 'Grados',
        icon: 'pi pi-fw pi-book',
        command: () => this.router.navigate(['/dashboard/grade']) 
      },
      {
        label: 'Calendarios',
        icon: 'pi pi-fw pi-calendar',
        command: () => this.router.navigate(['/dashboard/calendar']) 
      },
      {
        label: 'Mensajes',
        icon: 'pi pi-fw pi-inbox',
      }
      ,
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        command: () => this.router.navigate(['/dashboard/users']) 
      }
      ,
      {
        label: 'Boletines',
        icon: 'pi pi-fw pi-graduation-cap',
        command: () => this.router.navigate(['/dashboard/newsletter']) 
      },
      {
        label: 'Herramientas',
        icon: 'pi pi-fw pi-cog',
        command: () => this.router.navigate(['/dashboard/newsletter']) 
      }
    ]
  }
}
