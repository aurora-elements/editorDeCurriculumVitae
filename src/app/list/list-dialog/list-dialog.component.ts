import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IList } from '../list.model';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.scss']
})
export class ListDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IList,
    private fb: FormBuilder) {

  }

  @Output()
  submitAddEvent = new EventEmitter<IList>()

  @Output()
  submitEditEvent = new EventEmitter<IList>()

  form: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      useTitleLeft: [true, [Validators.requiredTrue]],
      useSubtitleLeft: [true, [Validators.requiredTrue]],
      useTitle: [true, [Validators.requiredTrue]],
      useDesc: [true, [Validators.requiredTrue]],
    })

    if (this.dialog) {
      this.form = this.fb.group({
        title: ['', [Validators.required]],
        useTitleLeft: [this.dialog.itemsConfig?.useTitleLeft, [Validators.requiredTrue]],
        useSubtitleLeft: [this.dialog.itemsConfig?.useSubtitleLeft, [Validators.requiredTrue]],
        useTitle: [this.dialog.itemsConfig?.useTitle, [Validators.requiredTrue]],
        useDesc: [this.dialog.itemsConfig?.useDesc, [Validators.requiredTrue]],
      })
      this.form?.patchValue(this.dialog);
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    let list: IList

    let title = this.form.value.title.toLowerCase() 
    let trimmedTitle = title.trim();
    let normalizeTitle = trimmedTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let formattedTitle = normalizeTitle.replace(/\s+/g, '-');

    if(this.dialog) {
      list = {
        id: this.dialog.id,
        title: this.form.value.title,
        itemsConfig: {
          useTitle: this.form.value.useTitle,
          useTitleLeft: this.form.value.useTitleLeft,
          useSubtitleLeft: this.form.value.useSubtitleLeft,
          useDesc: this.form.value.useDesc,
        }
      }
      this.submitEditEvent.emit(list)
    } else {
      list = {
        id: formattedTitle,
        title: this.form.value.title,
        itemsConfig: {
          useTitle: this.form.value.useTitle,
          useTitleLeft: this.form.value.useTitleLeft,
          useSubtitleLeft: this.form.value.useSubtitleLeft,
          useDesc: this.form.value.useDesc,
        }
      } 
      this.submitAddEvent.emit(list)     
    }
  }
}
