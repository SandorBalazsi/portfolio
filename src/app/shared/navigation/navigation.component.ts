import { NgClass} from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  navService = inject(NavigationService);
  navOpen = false;
  

  constructor(private scrollService: ScrollService){
    this.navService.navOpen$.subscribe(open => {
      this.navOpen = open; // Update component state when service changes
    });
  }

  scrollToSection(elementId: string): void {
    this.closeNav();
   
    this.navService.toggleNav();
    this.scrollService.scrollToElement(elementId, 140);
  }

  closeNav(){
    this.navOpen = false;
  }
  
  mailto(emailAddress: string, emailSubject: any) {
    return "mailto:" + emailAddress + "?subject=" + emailSubject
  }

  
}
