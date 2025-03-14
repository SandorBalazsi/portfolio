import { Component, inject, Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ScrollService } from '../services/scroll.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
@Injectable({
  providedIn: 'root', // This makes it available throughout the app
})
export class HeaderComponent {
  navService = inject(NavigationService);
  languageService = inject(LanguageService);
  isActive = false;
  isEnglish = false;

  constructor() {
    /**
     * Subscribes to navigation state changes and updates the component state accordingly.
     */
    this.navService.navOpen$.subscribe((open) => {
      this.isActive = open; // Update component state when service changes
    });

    /**
     * Subscribes to language changes and updates the component state accordingly.
     */
    this.languageService.isEnglish$.subscribe((isEnglish) => {
      this.isEnglish = isEnglish;
    });
  }

  /**
   * Toggles the language between English and German.
   * @param event - The event triggered by the language toggle switch.
   */
  toggleLanguage(event: any): void {
    this.languageService.setLanguage(!event.target.checked); // Checked = German, Unchecked = English
  }

  /**
   * Toggles the navigation state between open and closed.
   */
  changeNav() {
    this.isActive = !this.isActive;
    this.navService.toggleNav();
  }
}
