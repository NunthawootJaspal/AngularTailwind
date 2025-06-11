import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  LucideAngularModule,
  User,
  Hamburger
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly User = User;
  readonly Hamburger = Hamburger;

  openMenu = false;
}
