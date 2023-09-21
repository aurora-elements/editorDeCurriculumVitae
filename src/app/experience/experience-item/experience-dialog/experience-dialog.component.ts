import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { IExperience } from '../../experience.model';
import { ExperienceService } from '../../experience.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent {
  experienceForm: FormGroup = new FormGroup({})

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IExperience,
    private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      position: [this.dialog.id, [Validators.required, Validators.pattern("^[0-9]*$")]],
      title: [this.dialog.title, [Validators.required]],
      period: [this.dialog.period, [Validators.required]],
      company: [this.dialog.company, [Validators.required]],
      desc: [this.dialog.desc]
    })
  }

  get f() {
    return this.experienceForm.controls;
  }

  @Output()
  submitEvent = new EventEmitter<IExperience>()

  onSubmit() {
    const experienceData = {
      id: this.dialog.id ? this.dialog.id : -1,
      title: this.experienceForm.value.title as string,
      period: this.experienceForm.value.period as string,
      company: this.experienceForm.value.company as string,
      desc: this.experienceForm.value.desc as string
    }
    this.submitEvent.emit(experienceData)
  }
}
