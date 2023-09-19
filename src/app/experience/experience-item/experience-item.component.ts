import { Component, Input } from '@angular/core';
import { IExperience } from '../experience.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],

})
export class ExperienceItemComponent {
  @Input()
  item: IExperience = {
    title: '',
    period: '',
    company: '',
    desc: ''
  }
}
