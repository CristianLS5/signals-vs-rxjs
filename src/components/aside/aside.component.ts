import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideService } from './aside.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, MatToolbarModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  public isAsideCollapsed: boolean = true;

  //with signals
  //se añade el signal del servicio en este caso "asideCollapse"
  public asideCollapse = this.asideService.asideCollapse;

  constructor(private asideService: AsideService) {}

  ngOnInit() {
    //with rxjs
    // this.asideService.asideCollapse$.subscribe((isCollapsed: boolean) => {
    //   this.isAsideCollapsed = isCollapsed;
    // });
    //with signals - en caso de que se tenga que pasar el signal a observable
    //si se dejara como signal no haría falta usar esta parte
    toObservable(this.asideCollapse).subscribe((isCollapsed: boolean) => {
      this.isAsideCollapsed = isCollapsed;
    });
  }
}
