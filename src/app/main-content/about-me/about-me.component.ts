import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent {

  private scrollHandler: () => void; 

constructor(private scrollService: ScrollService){
 this.scrollHandler = () => {
      const element = document.getElementById('scroll-animation-first');
      const animatedElement = document.getElementById('animation-first');
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

scrollToSection(elementId:string):void{
  this.scrollService.scrollToElement(elementId, 92);
}


}

