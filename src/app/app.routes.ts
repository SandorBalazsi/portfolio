import { Routes } from '@angular/router';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { ProjectsComponent } from './main-content/projects/projects.component';

export const routes: Routes = [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'projects', component: ProjectsComponent}
];
