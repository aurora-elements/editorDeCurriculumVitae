import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAboutMe } from '../about-me.model';
import { AboutMeService } from '../about-me.service';

@Component({
  selector: 'app-about-me-dialog',
  templateUrl: './about-me-dialog.component.html',
  styleUrls: ['./about-me-dialog.component.scss']
})
export class AboutMeDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IAboutMe,
    private aboutMeService: AboutMeService
  ) { }

  pageHeaderForm = new FormGroup({
    aboutMe: new FormControl(this.dialog.aboutMe)
  })

  onSubmit() {
    const aboutMeData: IAboutMe = {
      aboutMe: this.pageHeaderForm.value.aboutMe ? this.pageHeaderForm.value.aboutMe : this.dialog.aboutMe
    }

    this.aboutMeService.set(aboutMeData)
  }
}
