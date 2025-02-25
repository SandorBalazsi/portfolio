import { Component, inject, Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

@Injectable({
  providedIn: 'root' // This makes it available throughout the app
})

export class HeaderComponent {
navService= inject(NavigationService);
isActive = false;

constructor(){
  this.navService.navOpen$.subscribe(open => {
    this.isActive = open; // Update component state when service changes
  });
}


changeNav(){
  this.isActive = !this.isActive;
  this.navService.toggleNav();
}
}
