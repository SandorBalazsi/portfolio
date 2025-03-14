import { CommonModule, NgClass } from '@angular/common';
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
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navService = inject(NavigationService);
  navOpen = false;
  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();

  constructor(private scrollService: ScrollService) {
    /**
     * Subscribes to navigation state changes and updates the component state accordingly.
     */
    this.navService.navOpen$.subscribe((open) => {
      this.navOpen = open; // Update component state when service changes
    });
  }

  /**
   * Scrolls to the specified section of the page and closes the navigation.
   * @param elementId - The ID of the element to scroll to.
   */
  scrollToSection(elementId: string): void {
    this.closeNav();

    this.navService.toggleNav();
    this.scrollService.scrollToElement(elementId, 140);
  }

  /**
   * Closes the navigation.
   */
  closeNav() {
    this.navOpen = false;
  }

  /**
   * Generates a mailto link with the specified email address and subject.
   * @param emailAddress - The email address to send the mail to.
   * @param emailSubject - The subject of the email.
   * @returns A string representing the mailto link.
   */
  mailto(emailAddress: string, emailSubject: any) {
    return 'mailto:' + emailAddress + '?subject=' + emailSubject;
  }

  ngOnInit(): void {
    // Get initial value
    this.isEnglish = this.languageService.getCurrentLanguage();

    // Subscribe to changes
    this.subscription = this.languageService.isEnglish$.subscribe(
      (isEnglish) => {
        this.isEnglish = isEnglish;
      }
    );
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
