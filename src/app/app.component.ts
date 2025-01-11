import { Component } from '@angular/core';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ReferenceComponent } from './main-content/reference/reference.component';
import { ContactComponent } from './main-content/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, HeaderComponent, FooterComponent, AboutMeComponent, SkillsComponent,ProjectsComponent,ReferenceComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
