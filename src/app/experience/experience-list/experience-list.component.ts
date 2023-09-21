import { Component, OnInit } from '@angular/core';
import { IExperience } from '../experience.model';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  experiences: IExperience[] = []

  constructor(private experiencesService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experiencesService.get()

    this.experiencesService.update.subscribe(() => {
      this.experiences = this.experiencesService.get()  
    })
  }

  add() {
    
  }
}
