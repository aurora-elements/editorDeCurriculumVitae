import { Component, Inject } from '@angular/core';
import { IPageHeader } from '../page-header.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageHeaderService } from '../page-header.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-header-dialog',
  templateUrl: './page-header-dialog.component.html',
  styleUrls: ['./page-header-dialog.component.scss']
})
export class PageHeaderDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IPageHeader,
    private pageHeaderService: PageHeaderService
  ) {}

  pageHeaderForm = new FormGroup({
    name: new FormControl(this.dialog.name),
    job: new FormControl(this.dialog.job)
  })

  onSubmit() {
    const pageHeaderData: IPageHeader = {
      name: this.pageHeaderForm.value.name ? this.pageHeaderForm.value.name : this.dialog.name,
      job: this.pageHeaderForm.value.job ? this.pageHeaderForm.value.job : this.dialog.job
    }

    this.pageHeaderService.set(pageHeaderData)
  }
}
