import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();

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

  /**
   * Generates a mailto link with the specified email address and subject.
   * @param emailAddress - The email address to send the mail to.
   * @param emailSubject - The subject of the email.
   * @returns A string representing the mailto link.
   */
  mailto(emailAddress: string, emailSubject: any) {
    return 'mailto:' + emailAddress + '?subject=' + emailSubject;
  }
}
