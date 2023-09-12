import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { LocalService } from 'src/app/services/local.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from '../models/dialogData.model';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [LanguagesService]
})
export class DialogComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  items:Array<any>
  name: string
  isObjectArray: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IDialogData, 
    private localStorage: LocalService,
    private langService: LanguagesService) {
    this.items = this.dialog.items
    this.name = this.dialog.name
    this.isObjectArray = this.dialog.isObjectArray

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
      if (!this.isObjectArray) {
        this.dialog.items.push(value);
        
      } else {
        const languageArray = value.split(':')

        const item = {
          name: languageArray[0],
          level: Number(languageArray[1])
        }
        this.dialog.items.push(item)
      }      
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

  save(elements: Array<any>) {
    if (!this.isObjectArray) {
      let string = elements.toString()
      this.localStorage.saveData(this.dialog.storageName, string)
    } else {
      this.langService.set(elements)
    }
  }
}
