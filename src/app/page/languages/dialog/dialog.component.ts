import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from '../../../models/dialogData.model';
import { LanguagesService } from '../../../services/languages.service';
import { ILanguage } from 'src/app/models/language.model';

@Component({
  selector: 'app-dialog-languages',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [LanguagesService]
})
export class DialogLanguagesComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  items: Array<ILanguage> = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IDialogData,
    private langService: LanguagesService) {
    this.items = this.dialog.items

  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
        const languageArray = value.split(':')

        const item = {
          name: languageArray[0],
          level: Number(languageArray[1])
        }

        this.dialog.items.push(item)
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

  save(items: Array<ILanguage>) {
      this.langService.set(items)
  }
}
