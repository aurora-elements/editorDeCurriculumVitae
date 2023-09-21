import { Component, Input } from '@angular/core';
import { IExperience } from '../experience.model';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceService } from '../experience.service';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  providers: [ConfirmDialogComponent]

})
export class ExperienceItemComponent {
  @Input()
  index!: number;

  @Input()
  item!: IExperience;

  constructor(
    private dialog: MatDialog,
    private experienceService: ExperienceService
  ) {
  }

  edit() {
   const dialogRef = this.dialog.open(ExperienceDialogComponent, {
      width: '600px',
      data: this.item
    })

    dialogRef.componentInstance.submitEvent.subscribe(result => {
      if(result) {
       this.experienceService.edit(result)
      }
    })
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.experienceService.delete(this.index)
      }
    })
  }
}

