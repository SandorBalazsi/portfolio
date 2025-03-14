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
  isMobileDevice = false;
  @ViewChild('projectWrapper') projectWrapperRef: ElementRef | undefined;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.isEnglish = this.languageService.getCurrentLanguage();
    this.subscription = this.languageService.isEnglish$.subscribe(
      (isEnglish) => {
        this.isEnglish = isEnglish;
      }
    );
    this.isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Adds a hover effect to the project wrapper element when the mouse is over it.
   */
  onMouseOver() {
    this.projectWrapperRef?.nativeElement.classList.add('hover-effect');
  }

  /**
   * Removes the hover effect from the project wrapper element when the mouse leaves it.
   */
  onMouseLeft() {
    this.projectWrapperRef?.nativeElement.classList.remove('hover-effect');
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
