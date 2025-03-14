import { Component } from '@angular/core';
import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { AboutMeComponent } from '../../about-me/about-me.component';
import { SkillsComponent } from '../../skills/skills.component';
import { ProjectsComponent } from '../../projects/projects.component';
import { ReferenceComponent } from '../../reference/reference.component';
import { ContactComponent } from '../../contact/contact.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillsComponent, ProjectsComponent, ReferenceComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
