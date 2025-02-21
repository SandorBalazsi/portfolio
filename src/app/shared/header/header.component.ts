import { Component, inject, Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';


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


changeNav(){
  this.navService.toggleNav();
}

changeActive(){
  this.isActive = !this.isActive;
}}
