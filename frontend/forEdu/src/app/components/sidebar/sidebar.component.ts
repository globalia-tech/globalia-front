import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, RippleModule, BadgeModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpen = true;
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        customIcon: 'novedades1.png', // Icono personalizado
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
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        command: () => this.router.navigate(['/dashboard/users'])
      },
      {
        label: 'Boletines',
        icon: 'pi pi-fw pi-graduation-cap',
        command: () => this.router.navigate(['/dashboard/newsletter'])
      },
      {
        label: 'Herramientas',
        icon: 'pi pi-fw pi-cog',
        command: () => this.router.navigate(['/dashboard/tools'])
      }
    ];
  }
}
