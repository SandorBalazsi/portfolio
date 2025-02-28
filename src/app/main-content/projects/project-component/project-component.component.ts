import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.scss'
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

constructor(private languageService: LanguageService) {}

ngOnInit(): void {
  this.isEnglish = this.languageService.getCurrentLanguage();
  this.subscription = this.languageService.isEnglish$.subscribe(isEnglish => {
    this.isEnglish = isEnglish;
  });
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}


openGithub(){
  window.open(this.githubLink, '_blank');
  console.log('click worked');
}

openLive(){
  window.open(this.liveLink, '_blank');
  console.log('click worked');
}




}
