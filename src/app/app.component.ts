import { Component, DoCheck } from '@angular/core';
import { LocalService } from './shared/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  showTopSkills: boolean = this.localStore.getData('showTopSkills') as unknown as boolean
  showCertificacions: boolean = this.localStore.getData('showCertificacions') as unknown as boolean
  showAboutMe: boolean = this.localStore.getData('showAboutMe') as unknown as boolean
  showLanguages: boolean = this.localStore.getData('showLanguages') as unknown as boolean

  constructor(private localStore: LocalService) {

  }

  /* onChange($event: MatSlideToggleChange) {
    const key = $event.source.name as string
    const value = $event.source.checked as unknown as string

    if (value) {
      this.localStore.saveData(key, value)
    } else {
      this.localStore.removeData(key)
    }
  } */

  ngDoCheck() {
    if (this.localStore.getData('showTopSkills')) {
      this.showTopSkills = true
    } else {
      this.showTopSkills = false
    }

    if (this.localStore.getData('showCertificacions')) {
      this.showCertificacions = true
    } else {
      this.showCertificacions = false
    }

    if (this.localStore.getData('showAboutMe')) {
      this.showAboutMe = true
    } else {
      this.showAboutMe = false
    }

    if (this.localStore.getData('showLanguages')) {
      this.showLanguages = true
    } else {
      this.showLanguages = false
    }
  }
}
