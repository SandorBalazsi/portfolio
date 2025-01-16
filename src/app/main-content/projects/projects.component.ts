import { Component } from '@angular/core';
import { ProjectComponentComponent } from './project-component/project-component.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponentComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
