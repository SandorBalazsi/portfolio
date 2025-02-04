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
constructor(private scrollService: ScrollService){
}

scrollToSection(elementId:string):void{
  this.scrollService.scrollToElement(elementId, 92);
}
}

