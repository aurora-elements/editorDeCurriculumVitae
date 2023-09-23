import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageHeaderService } from './page-header.service';
import { IPageHeader } from './page-header.model';
import { PageHeaderDialogComponent } from './page-header-dialog/page-header-dialog.component';
import { AvatarDialogComponent } from '../avatar/avatar-dialog/avatar-dialog.component';
import { AvatarService } from '../avatar/avatar.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input()
  avatarUrl: string = ''

  avatarUrl2 = ''

  name: string = ''
  job: string = ''

  pageHeaderData: IPageHeader
  constructor(
    private dialog: MatDialog,
    private pageHeaderService: PageHeaderService,
    private avatarService: AvatarService
  ) {
    this.pageHeaderData = this.pageHeaderService.get()
  }

  ngOnInit(): void {
    this.name = this.pageHeaderData.name
    this.job = this.pageHeaderData.job
    // this.avatarUrl = this.avatarService.get()

    this.avatarUrl2 = `url(${this.avatarUrl})`

    this.pageHeaderService.pageHeaderChanged
      .subscribe((pageHeaderData: IPageHeader) => {

        this.pageHeaderData = pageHeaderData

        this.name = this.pageHeaderData.name
        this.job = this.pageHeaderData.job
      })
    
    this.avatarService.update.subscribe((newAvatar) => {
      this.avatarUrl = newAvatar
    })
  }

  editHeader() {
    this.dialog.open(PageHeaderDialogComponent, {
      width: '400px',
      data: {
        name: this.name,
        job: this.job,
      }
    })
  }

  editAvatar() {
    this.dialog.open(AvatarDialogComponent, {
      width: '400px',
      disableClose: true
    })
  }
}
