import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
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
}
