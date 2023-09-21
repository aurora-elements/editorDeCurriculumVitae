import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { IExperience } from '../../experience.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent implements OnInit {
  experienceForm: FormGroup = new FormGroup({})

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IExperience,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.experienceForm = this.fb.group({
      title: ['', [Validators.required]],
      period: ['', [Validators.required]],
      company: ['', [Validators.required]],
      desc: ['']
    })

    if (this.dialog) {
      this.experienceForm?.patchValue(this.dialog);
    }
  }

  get f() {
    return this.experienceForm.controls;
  }

  @Output()
  submitEditEvent = new EventEmitter<IExperience>()

  @Output()
  submitAddEvent = new EventEmitter<IExperience>()

  onSubmit() {
    let experienceData: IExperience

    if(this.dialog) {
      experienceData = {
        id: this.dialog.id,
        title: this.experienceForm.value.title as string,
        period: this.experienceForm.value.period as string,
        company: this.experienceForm.value.company as string,
        desc: this.experienceForm.value.desc as string
      }

      this.submitEditEvent.emit(experienceData)

    } else {
      experienceData = {
        title: this.experienceForm.value.title as string,
        period: this.experienceForm.value.period as string,
        company: this.experienceForm.value.company as string,
        desc: this.experienceForm.value.desc as string
      }

      this.submitAddEvent.emit(experienceData)     
    }
  }
}
