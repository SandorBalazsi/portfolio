import { CommonModule, NgClass} from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';
import { HeaderComponent } from '../header/header.component';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  navService = inject(NavigationService);
  navOpen = false;
  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();
  

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

  ngOnInit(): void {
     // Get initial value
     this.isEnglish = this.languageService.getCurrentLanguage();
    
     // Subscribe to changes
     this.subscription = this.languageService.isEnglish$.subscribe(isEnglish => {
       this.isEnglish = isEnglish;
     });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    this.subscription.unsubscribe();
  }

  
}
