import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { LucideAngularModule, Hamburger, LayoutDashboard  } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    CommonModule,
    LucideAngularModule,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly Hamburger = Hamburger;
  readonly LayoutDashboard  = LayoutDashboard ;
  showFiller = signal<boolean>(false);

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleSidebar() {
    this.showFiller.set(!this.showFiller());
  }
}
