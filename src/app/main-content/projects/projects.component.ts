import { Component, inject } from '@angular/core';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponentComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
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
