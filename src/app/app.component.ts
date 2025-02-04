import { Component } from '@angular/core';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ReferenceComponent } from './main-content/reference/reference.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavigationComponent, LandingPageComponent, HeaderComponent, FooterComponent, AboutMeComponent, SkillsComponent,ProjectsComponent,ReferenceComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  
}
