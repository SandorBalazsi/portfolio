import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();

  /**
   * Generates a mailto link with the specified email address and subject.
   * @param emailAddress - The email address to send the mail to.
   * @param emailSubject - The subject of the email.
   * @returns A string representing the mailto link.
   */
  mailto(emailAddress: string, emailSubject: any) {
    return 'mailto:' + emailAddress + '?subject=' + emailSubject;
  }

  private scrollHandler: () => void;

  constructor() {
    /**
     * Initializes the scroll handler function that adds or removes animation classes
     * based on the visibility of the target element.
     */
    this.scrollHandler = () => {
      const element = document.getElementById('scroll-animation-second');
      const animatedElement = document.getElementById('animation-second');
      if (element && animatedElement) {
        if (this.isElementVisible(element)) {
          animatedElement.classList.add('animation');
        } else {
          animatedElement.classList.remove('animation');
        }
      }
    };
  }

  /**
   * Checks if the given element is visible in the viewport.
   * @param element - The DOM element to check.
   * @returns True if the element is visible, false otherwise.
   */
  private isElementVisible(element: Element): boolean {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = elementTop + element.getBoundingClientRect().height;

    return elementBottom > 0 && elementTop < window.innerHeight;
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler);
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
    window.removeEventListener('scroll', this.scrollHandler);
    // Clean up subscription to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
