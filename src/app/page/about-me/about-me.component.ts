import { Component, HostListener, OnInit } from '@angular/core';
import { IAboutMe } from './about-me.model';
import { AboutMeService } from './about-me.service';
import { AboutMeDialogComponent } from './about-me-dialog/about-me-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMe: string = ''

  aboutMeData: IAboutMe

  constructor(
    private dialog: MatDialog,
    private aboutMeService: AboutMeService
  ) {
    this.aboutMeData = this.aboutMeService.get()
  }

  ngOnInit(): void {
    this.aboutMe = this.aboutMeData.aboutMe

    this.aboutMeService.aboutMeChanged
      .subscribe((aboutMeData: IAboutMe) => {

        this.aboutMeData = aboutMeData

        this.aboutMe = this.aboutMeData.aboutMe
      })
  }

  @HostListener('click') onclick() {
    this.dialog.open(AboutMeDialogComponent, {
      width: '600px',
      data: {
        aboutMe: this.aboutMeService.aboutMeData.aboutMe
      }
    })
  }

}
