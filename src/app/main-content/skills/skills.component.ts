import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

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
    }
  
    ngOnDestroy(): void {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  
}
