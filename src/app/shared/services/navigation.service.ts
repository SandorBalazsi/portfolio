import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes it available throughout the app
})
export class NavigationService {
  private navOpenSubject = new BehaviorSubject<boolean>(false);
  navOpen$ = this.navOpenSubject.asObservable();

  /**
   * Toggles the navigation state between open and closed.
   */
  toggleNav() {
    this.navOpenSubject.next(!this.navOpenSubject.value);
  }
}
