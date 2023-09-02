import { Component } from '@angular/core';
import { LocalService } from '../services/local.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  showTopSkills: boolean
  showCertificacions: boolean
  showAboutMe: boolean
  showLanguages: boolean

  constructor(private localStore: LocalService) {
    this.showTopSkills = this.localStore.getData('showTopSkills') as unknown as boolean
    this.showCertificacions = this.localStore.getData('showCertificacions') as unknown as boolean
    this.showAboutMe = this.localStore.getData('showAboutMe') as unknown as boolean
    this.showLanguages = this.localStore.getData('showLanguages') as unknown as boolean
  }

  onChange($event: MatSlideToggleChange) {
    const key = $event.source.name as string
    const value = $event.source.checked as unknown as string

    if (value) {
      this.localStore.saveData(key, value)
    } else {
      this.localStore.removeData(key)
    }
  }
}
