import { Component, inject, Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';
import { LanguageService } from '../services/language.service';


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
languageService = inject(LanguageService);
isActive = false;
isEnglish = true;

constructor(){
  this.navService.navOpen$.subscribe(open => {
    this.isActive = open; // Update component state when service changes
  });

  this.languageService.isEnglish$.subscribe(isEnglish => {
    this.isEnglish = isEnglish;
  });
}

toggleLanguage(event: any): void {
  this.languageService.setLanguage(!event.target.checked); // Checked = German, Unchecked = English
}


changeNav(){
  this.isActive = !this.isActive;
  this.navService.toggleNav();
}
}
