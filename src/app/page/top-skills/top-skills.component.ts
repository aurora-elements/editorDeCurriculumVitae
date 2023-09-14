import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { TopSkillsDialogComponent } from './top-skills-dialog/top-skills-dialog.component';
import { TopSkillsService } from 'src/app/page/top-skills/top-skills.service';

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
  }

  ngOnInit(): void {
    this.topSkills = this.topSkillsService.get()
  }

  @HostListener('click') onclick() {
    this.dialog.open(TopSkillsDialogComponent, {
      width: '400px',
      data: {
        items: this.topSkills
      }
    })
  }
}
