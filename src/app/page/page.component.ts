import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { SettingsService } from '../settings/settings.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  showTopSkills: boolean
  showCertificacions: boolean
  showAboutMe: boolean
  showLanguages: boolean

  constructor(private settingsService: SettingsService) {
    this.showTopSkills = this.settingsService.getSetting('showTopSkills')
    this.showCertificacions = this.settingsService.getSetting('showCertificacions')
    this.showAboutMe = this.settingsService.getSetting('showAboutMe')
    this.showLanguages = this.settingsService.getSetting('showLanguages')
  }

  ngOnInit() {
    this.settingsService.settingsChanged
      .subscribe((settings) => {
        this.showTopSkills = this.settingsService.getSetting('showTopSkills', settings)
        this.showCertificacions = this.settingsService.getSetting('showCertificacions', settings)
        this.showAboutMe = this.settingsService.getSetting('showAboutMe', settings)
        this.showLanguages = this.settingsService.getSetting('showLanguages', settings)
      })
  }
}
