import { Component, inject } from '@angular/core';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
navService= inject(NavigationService);


changeNav(){
  this.navService.toggleNav();
}
}
