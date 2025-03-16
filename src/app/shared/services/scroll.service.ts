import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {

  private scrollTarget: string | null = null;

  /**
   * Sets the scroll target before navigating.
   */
  setScrollTarget(elementId: string) {
    this.scrollTarget = elementId;
  }

  /**
   * Scrolls to the stored element if it exists.
   */
  scrollToStoredElement(offset: number = 0): void {
    if (this.scrollTarget) {
      this.scrollToElement(this.scrollTarget, offset);
      this.scrollTarget = null; // Clear after scrolling
    }
  }
  /**
   * Scrolls to the specified element with an optional offset.
   * @param elementId - The ID of the element to scroll to.
   * @param offset - The offset to apply to the scroll position.
   */
  scrollToElement(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
