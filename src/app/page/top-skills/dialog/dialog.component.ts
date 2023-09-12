import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from '../../../models/dialogData.model';
import { TopSkillsService } from '../../../services/top-skills.service';

@Component({
  selector: 'app-dialog-top-skills',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [TopSkillsService]
})
export class DialogTopSkillsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  items: Array<any> = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IDialogData,
    private topSkillsService: TopSkillsService) {
    this.items = this.dialog.items
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

  remove(item: string): void {

    const index = this.dialog.items.indexOf(item);

    if (index >= 0) {
      this.dialog.items.splice(index, 1);
    }
  }

  save(items: Array<string>) {
    this.topSkillsService.set(items)
  }
}
