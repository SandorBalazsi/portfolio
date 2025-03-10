import { CommonModule} from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  isEnglish = true;
    private languageService = inject(LanguageService);
    private subscription: Subscription = new Subscription();

    ngOnInit(): void {
  
       // Get initial value
       this.isEnglish = this.languageService.getCurrentLanguage();
      
       // Subscribe to changes
       this.subscription = this.languageService.isEnglish$.subscribe(isEnglish => {
         this.isEnglish = isEnglish;
       });
    }
  
    ngOnDestroy(): void {  
      // Clean up subscription to prevent memory leaks
      this.subscription.unsubscribe();
    }
}
