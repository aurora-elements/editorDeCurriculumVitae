import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Output()
  confirmEvent = new EventEmitter<any>()

  infoText: string | undefined

  constructor(@Inject(MAT_DIALOG_DATA) public dialog: string) {}

  ngOnInit(): void {
    if(this.dialog) {
      this.infoText = this.dialog
    } else {
      this.infoText = 'Willst du wirklich diesen Eintrag löschen?'
    }
  }

  submit() {
    this.confirmEvent.emit()
  }
}
