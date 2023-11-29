import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideService } from '../aside/aside.service';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public isAsideCollapsed = true;

  constructor(private asideService: AsideService) {}

  toggleSideNav() {
    this.isAsideCollapsed = !this.isAsideCollapsed;
    this.asideService.toggleAside();
  }
}
