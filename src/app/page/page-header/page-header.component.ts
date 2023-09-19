import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageHeaderService } from './page-header.service';
import { IPageHeader } from './page-header.model';
import { PageHeaderDialogComponent } from './page-header-dialog/page-header-dialog.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input()
  avatarUrl: string = './assets/img/avatar.jpg'

  name: string = ''
  job: string = ''

  pageHeaderData: IPageHeader
  constructor(
    private dialog: MatDialog,
    private pageHeaderService: PageHeaderService
  ) {
    this.pageHeaderData = this.pageHeaderService.get()
  }

  ngOnInit(): void {
    this.name = this.pageHeaderData.name
    this.job = this.pageHeaderData.job

    this.pageHeaderService.pageHeaderChanged
      .subscribe((pageHeaderData: IPageHeader) => {

        this.pageHeaderData = pageHeaderData

        this.name = this.pageHeaderData.name
        this.job = this.pageHeaderData.job
      })
  }

  @HostListener('click') onclick() {
    this.dialog.open(PageHeaderDialogComponent, {
      width: '400px',
      data: {
        name: this.name,
        job: this.job,
      }
    })
  }
}
