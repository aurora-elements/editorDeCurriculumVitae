import { Component } from '@angular/core';

@Component({
  selector: 'app-top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss']
})
export class TopSkillsComponent {
  topSkills:Array<string> = [
    'Vue',
    'Angular',
    'Javascript',
    'CSS, LESS, SCSS',
    'UI/UX Design',
    'GitLab',
    'Web-Components'
  ]
}
