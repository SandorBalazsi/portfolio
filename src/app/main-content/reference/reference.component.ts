import { Component } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {
 private scrollHandler: () => void; 

constructor(){
 this.scrollHandler = () => {
      const element = document.getElementById('scroll-animation-third');
      const animatedElement = document.getElementById('animation-third');
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
