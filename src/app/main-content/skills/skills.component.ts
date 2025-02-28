import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  isEnglish = true;
  private languageService = inject(LanguageService);
  private subscription: Subscription = new Subscription();

  mailto(emailAddress: string, emailSubject: any) {
    return "mailto:" + emailAddress + "?subject=" + emailSubject
  }

   private scrollHandler: () => void; 
 
  
  constructor(){
   this.scrollHandler = () => {
        const element = document.getElementById('scroll-animation-second');
        const animatedElement = document.getElementById('animation-second');
        if (element && animatedElement) {
          if (this.isElementVisible(element)) {
            console.log('animation start NOW!')
            animatedElement.classList.add('animation');
          } else {
            animatedElement.classList.remove('animation');
          }
        }
      };
    }
  
    private isElementVisible(element: Element): boolean {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = elementTop + element.getBoundingClientRect().height;
      
      return (
        elementBottom > 0 &&
        elementTop < window.innerHeight
      );
    }
  
    ngOnInit(): void {
      window.addEventListener('scroll', this.scrollHandler);
      // Get initial value
     this.isEnglish = this.languageService.getCurrentLanguage();
    
     // Subscribe to changes
     this.subscription = this.languageService.isEnglish$.subscribe(isEnglish => {
       this.isEnglish = isEnglish;
     });
    }
  
    ngOnDestroy(): void {
      window.removeEventListener('scroll', this.scrollHandler);
        // Clean up subscription to prevent memory leaks
    this.subscription.unsubscribe();
    }
  
}
