import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogTopSkillsComponent } from './dialog/dialog.component';
import { TopSkillsService } from 'src/app/services/top-skills.service';

@Component({
  selector: 'app-top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss'],
  providers: [TopSkillsService]
})
export class TopSkillsComponent implements OnInit {
  topSkills:Array<string> = []

  @Input() 
  showTopSkills: boolean = true;

  constructor(
    private dialog: MatDialog, 
    private topSkillsService: TopSkillsService) {
    this.topSkillsService.get()
  }

  ngOnInit(): void {
    this.topSkills = this.topSkillsService.items
  }

  edit(): void {
    this.dialog.open(DialogTopSkillsComponent, {
      width: '400px',
      data: {
        items: this.topSkills
      }
    })
  }
}
