import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AvatarService } from '../avatar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAvatar } from '../avatar.model';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss']
})
export class AvatarDialogComponent implements OnInit, OnDestroy {

  isAvatarSaved: boolean = false
  avatarBase64: string = ''
  placeholder = './assets/img/avatar.jpg'
  form: FormGroup = new FormGroup({})

  formData!: IAvatar;

  isColorTip = `
    Hier kannst du wählen, ob dein Foto farbig oder schwarz-weiß dargestellt werden soll.
  `
  roundedTip = `
    Hier kannst du wählen, ob dein Foto rund oder eckig dargestellt werden soll.
  `
  backgroundSizeTip = `
    Beim Wert "cover"; füllt das Foto die ganze Breite aus und zwar so, die kurze Seite des Fotos in die Box reinpasst. 
    Bei "contain"; wird die längere Seite des Fotos in die umgebende Box eingepasst. 
    Auch ein prozentualer Wert ist möglich, um das Foto rein oder raus zu zoomen.
  `
  backgroundColorTip = `
    Festlegen einer Hintergrundfarbe für das Box. Das ist sinnvoll, falls das Foto kleiner als die Box ist.
  `
  backgroundPositionX = `
    Dieser Wert wird verwendet, um die Position des Fotos horizontal zu verändern. 
    Mögliche Werte sind: top, left, right, center oder ein fester Wert in "px" oder "%".
  `
  backgroundPositionY = `
    Dieser Wert wird verwendet, um die Position des Fotos vertikal zu verändern. 
    Mögliche Werte sind: top, left, right, center oder ein fester Wert in "px" oder "%".
  `
  aspectRatioTip = `
    Dieser Wert beschreibt das Verhältnis zwischen Höhe und Breite des Fotos. Zum Beispiel bedeutet "1 / 1", dass das Foto die gleiche Höhe wie Breite hat.
  `

  @ViewChild('avatarInput')
  input!: ElementRef<HTMLInputElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IAvatar,
    private fb: FormBuilder,
    private service: AvatarService
  ) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      positionX: [''],
      positionY: [''],
      size: [''],
      aspectRatio: [''],
      backgroundColor: [''],
      isColor: [true],
      rounded: [true]
    })

    if (this.dialog) {
      console.log('this.dialog')
      this.form?.patchValue(this.dialog);
    }
  }

  ngOnDestroy(): void {
    this.avatarBase64 = ''
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const image = new Image();

        image.src = e.target.result;

        image.onload = () => {
          const imgBase64Path = e.target.result;

          this.avatarBase64 = imgBase64Path;
          this.isAvatarSaved = true;

          this.onSubmitLocale()
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);

    }
  }

  reset() {
    this.avatarBase64 = '';
    this.isAvatarSaved = false;
    this.input.nativeElement.value = ''
    this.form?.patchValue(this.dialog)
    console.log('reset dialog: ', this.dialog)
  }

  onSubmit() {
     this.formData = {
      url: this.avatarBase64 ? this.avatarBase64 : this.dialog.url,
      positionX: this.form.value.positionX as string,
      positionY: this.form.value.positionY as string,
      size: this.form.value.size as string,
      aspectRatio: this.form.value.aspectRatio as string,
      backgroundColor: this.form.value.backgroundColor as string,
      isColor: this.form.value.isColor as boolean,
      rounded: this.form.value.rounded as boolean,
    }

    console.log('formData onSubmit: ', this.formData)
    this.service.set(this.formData)
  }

  onSubmitLocale() {
    this.formData = {
      url: this.avatarBase64 ? this.avatarBase64 : this.dialog.url,
      positionX: this.form.value.positionX as string,
      positionY: this.form.value.positionY as string,
      size: this.form.value.size as string,
      aspectRatio: this.form.value.aspectRatio as string,
      backgroundColor: this.form.value.backgroundColor as string,
      isColor: this.form.value.isColor as boolean,
      rounded: this.form.value.rounded as boolean,
    }

    console.log('formData onLocaleSubmit: ', this.formData)
    this.service.setLocale(this.formData)
    this.isAvatarSaved = true
  }
}
