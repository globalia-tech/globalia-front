import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [SidebarComponent, RouterModule, DividerModule, NavbarComponent, CommonModule],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
