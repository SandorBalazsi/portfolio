import { Component, inject } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();
  private scrollHandler: () => void;

  constructor(private scrollService: ScrollService) {
    /**
     * Initializes the scroll handler function that adds or removes animation classes
     * based on the visibility of the target element.
     */
    this.scrollHandler = () => {
      const element = document.getElementById('scroll-animation-first');
      const animatedElement = document.getElementById('animation-first');
      if (element && animatedElement) {
        if (this.isElementVisible(element)) {
          console.log('animation start NOW!');
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
  
  /**
   * Scrolls to the specified section of the page.
   * @param elementId - The ID of the element to scroll to.
   */
  scrollToSection(elementId: string): void {
    this.scrollService.scrollToElement(elementId, 92);
  }
}
