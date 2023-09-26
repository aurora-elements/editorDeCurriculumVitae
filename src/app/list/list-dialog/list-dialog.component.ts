import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.scss']
})
export class ListDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({})

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: { id: string, title: string },
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]]
    })
  }

  get f() {
    return this.form.controls;
  }
  
  @Output()
  submitAddEvent = new EventEmitter<{id: string, title: string}>()

  onSubmit() {
    let list: { id: string, title: string }

    let title = this.form.value.title.toLowerCase() 
    let trimmedTitle = title.trim();
    let normalizeTitle = trimmedTitle.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let formattedTitle = normalizeTitle.replace(/\s+/g, '-');

    list = {
      id: formattedTitle,
      title: this.form.value.title as string
    }
 
      this.submitAddEvent.emit(list)
  }
}
