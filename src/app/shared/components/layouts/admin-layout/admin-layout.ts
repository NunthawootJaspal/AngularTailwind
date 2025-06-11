import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../common/header/header';
import { Footer } from '../../common/footer/footer';
import { Sidebar } from '../../common/sidebar/sidebar';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, Header, Footer, Sidebar],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}
