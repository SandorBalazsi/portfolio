import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
@Input() description!: string;
@Input() githubLink!: string;
@Input() liveLink!: string;
@Input() reverse: boolean | undefined = false;

constructor(){
  
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
