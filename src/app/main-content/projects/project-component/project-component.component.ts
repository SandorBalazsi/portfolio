import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss',
})
export class ProjectComponentComponent {
  @Input() number!: string;
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() skills!: string;
  @Input() descriptionEn!: string;
  @Input() descriptionDe!: string;
  @Input() githubLink!: string;
  @Input() liveLink!: string;
  @Input() reverse: boolean | undefined = false;

  isEnglish: boolean = true;
  private subscription: Subscription = new Subscription();
  private scrollHandler: () => void;
  private hasHoverEffect = false;
  private hoverTimeout: any = null;
  isMobileDevice = false;
  @ViewChild('projectWrapper') projectWrapperRef: ElementRef | undefined;

  constructor(private languageService: LanguageService) {
    /**
     * Initializes the scroll handler function that adds or removes animation classes
     * based on the visibility of the target element.
     */
    this.scrollHandler = () => {
      this.handleHoverChanges();
    };
  }

 

handleHoverChanges() {
  this.isMobileDevice = this.detectMobileDevice();
  const element = this.projectWrapperRef?.nativeElement;

  if (!element) return;

  if (this.isMobileDevice) {
    if (this.isElementVisible(element) && !this.hasHoverEffect) {
      this.hoverTimeout = setTimeout(() => {
        this.onMouseOver();
        this.hasHoverEffect = true;
      }, 500);
    } else if (!this.isElementVisible(element) && this.hasHoverEffect) {
      clearTimeout(this.hoverTimeout);
      this.onMouseLeft();
      this.hasHoverEffect = false;
    }
  } else {
    clearTimeout(this.hoverTimeout);
    element.classList.remove('hover-effect');
    this.hasHoverEffect = false; 
  }
}

  /**
   * Checks if the given element is visible in the viewport.
   * @param element - The DOM element to check.
   * @returns True if the element is visible, false otherwise.
   */
  private isElementVisible(element: Element): boolean {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = elementTop + element.getBoundingClientRect().height
    return elementBottom > 0 && elementTop < window.innerHeight;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.handleHoverChanges();
    });
    window.addEventListener('scroll', this.scrollHandler);
    this.isEnglish = this.languageService.getCurrentLanguage();
    this.subscription = this.languageService.isEnglish$.subscribe(
      (isEnglish) => {
        this.isEnglish = isEnglish;
      }
    );
  }

  private detectMobileDevice(): boolean {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
    this.subscription.unsubscribe();
  }

/**
 * Adds a hover effect to the project wrapper element when the mouse is over it.
 */
onMouseOver() {
  if (this.isMobileDevice) {
    if (this.projectWrapperRef?.nativeElement) {
      this.projectWrapperRef.nativeElement.classList.add('hover-effect');
    }
  }
}

/**
 * Removes the hover effect from the project wrapper element when the mouse leaves it.
 */
onMouseLeft() {
  if (this.isMobileDevice) {
    if (this.projectWrapperRef?.nativeElement) {
      this.projectWrapperRef.nativeElement.classList.remove('hover-effect');
    }
  } 
}


  /**
   * Opens the GitHub link in a new browser tab.
   */
  openGithub() {
    window.open(this.githubLink, '_blank');
  }

  /**
   * Opens the live project link in a new browser tab.
   */
  openLive() {
    window.open(this.liveLink, '_blank');
  }
}
