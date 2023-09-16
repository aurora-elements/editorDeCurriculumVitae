import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  settings: Array<string> = []
  showTopSkills: boolean
  showCertificacions: boolean
  showLanguages: boolean
  showAboutMe: boolean

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.get()

    this.showTopSkills = this.settingsService.getSetting('showTopSkills')
    this.showCertificacions = this.settingsService.getSetting('showCertificacions')
    this.showLanguages = this.settingsService.getSetting('showLanguages')
    this.showAboutMe = this.settingsService.getSetting('showAboutMe')

}

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
}
