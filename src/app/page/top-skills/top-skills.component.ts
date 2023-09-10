import { Component, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LocalService } from '../../services/local.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss']
})
export class TopSkillsComponent {
  topSkills:Array<string>

  @Input() 
  showTopSkills: boolean = true;

  constructor(private dialog: MatDialog, private localStorage: LocalService) {
    if (this.localStorage.getData('top-skills') !== null) {

      const string = this.localStorage.getData('top-skills')
      const topSkillsArray = string!.split(/,/)
      this.topSkills = topSkillsArray

    } else {
      this.topSkills = [
        'Top-Skill 1',
        'Top-Skill 2',
        'Top-Skill 3'
      ]
    }
  }

  edit(): void {
    this.dialog.open(DialogComponent, {
      data: {
        name: 'Top-Skills',
        storageName: 'top-skills',
        items: this.topSkills
      }
    })
  }
}
