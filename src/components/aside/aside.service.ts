import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  //with rxjs
  //private asideCollapseSubject = new Subject<boolean>();
  //public asideCollapse$ = this.asideCollapseSubject.asObservable();

  //with signals
  public asideCollapse = signal(true);

  constructor() {}

  public toggleAside() {
    //with rxjs
    //this.asideCollapseSubject.next(isCollapsed);

    //with signals - set
    //this.asideCollapse.set(isCollapsed);

    //with signals - update
    //de esta forma no necesitas mandar la propiedad "isCollapsed" por el método
    this.asideCollapse.update((value: boolean) => !value);
  }
}
