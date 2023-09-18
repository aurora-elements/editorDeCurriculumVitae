import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsService } from './settings.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DesignService } from './design.service';
import { IDesign } from './design.model';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Array<string> = []
  design: Array<IDesign> = []
  showTopSkills: boolean
  showCertificacions: boolean
  showLanguages: boolean
  showAboutMe: boolean
  mainBgColor: string = this.designService.getSingleDesign('mainBgColor')
  headlineColor: string = this.designService.getSingleDesign('headlineColor')
  headlineFont: string = this.designService.getSingleDesign('headlineFont')

  constructor(
    private settingsService: SettingsService,
    private designService: DesignService
  ) {
    this.settings = this.settingsService.get()

    this.showTopSkills = this.settingsService.getSetting('showTopSkills')
    this.showCertificacions = this.settingsService.getSetting('showCertificacions')
    this.showLanguages = this.settingsService.getSetting('showLanguages')
    this.showAboutMe = this.settingsService.getSetting('showAboutMe')

  }

  settingsForm = new FormGroup({
    mainBgColor: new FormControl(this.mainBgColor, { updateOn: 'blur' }),
    headlineColor: new FormControl(this.headlineColor, { updateOn: 'blur' }),
    headlineFont: new FormControl(this.headlineFont, { updateOn: 'blur'})
  })

  onChange($event: MatSlideToggleChange) {
    const key = $event.source.name as string
    const value = $event.source.checked as unknown as string

   if (value) {
      this.settings.push(key)

      this.settingsService.set(this.settings)

    } else {
      
     const settingsList = this.settings.filter((setting) => {
      return setting !== key
     })

     this.settings = settingsList

     this.settingsService.set(this.settings)
    }
  }

  ngOnInit() {
    this.settingsForm.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(() => this.onSubmit());
  }

  onSubmit() {
    const designData: IDesign = {
      mainBgColor: this.settingsForm.value.mainBgColor ? this.settingsForm.value.mainBgColor : this.mainBgColor,
      headlineColor: this.settingsForm.value.headlineColor ? this.settingsForm.value.headlineColor : this.headlineColor,
      headlineFont: this.settingsForm.value.headlineFont ? this.settingsForm.value.headlineFont : this.headlineFont
    }

    this.designService.set(designData)
  }
}
