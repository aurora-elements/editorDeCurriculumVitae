import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, DoCheck, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { LocalService } from 'src/app/services/local.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from '../models/dialogData.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  items:Array<any> = []
  name: string = ''

  constructor(@Inject(MAT_DIALOG_DATA) public dialog: IDialogData, private localStorage: LocalService) {
    console.log('dialog: ', this.dialog)
    this.items = this.dialog.items
    this.name = this.dialog.name

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
      this.dialog.items.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(item: any): void {

    const index = this.dialog.items.indexOf(item);

    if (index >= 0) {
      this.dialog.items.splice(index, 1);
    }
  }

  save(elements: Array<string>) {
    let string = elements.toString()
    this.localStorage.saveData(this.dialog.storageName, string)
  }
}
