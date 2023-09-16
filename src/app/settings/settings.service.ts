import { EventEmitter, Injectable } from '@angular/core';
import { LocalService } from '../shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private localStorage: LocalService) { }

  settingsChanged = new EventEmitter<string[]>()

  private items: Array<string> = []
  private storeName = 'settings'
  private itemsStore = this.localStorage.getData(this.storeName)

  private defaultSettings = [
    'showTopSkills',
    'showCertificacions',
    'showLanguages',
    'showAboutMe'
  ]

  get() {
    if (this.itemsStore !== null) {
      const itemsArray = this.itemsStore.split(/,/)
      if (itemsArray.length > 0) {
        this.items = itemsArray
      } else {
        this.items = this.defaultSettings
      }

    } else {
      this.items = this.defaultSettings
    }

    return this.items
  }

  getSetting(setting: string, settings?:Array<string>) {
    let settingsArray: Array<string>

    if(!settings) {
      settingsArray = this.get()
    } else {
      settingsArray = settings
    }

    if (settingsArray.includes(setting)) {
      return true
    }
    return false
  }

  set(items: string[]) {
    const string = items.toString()

    this.localStorage.saveData(this.storeName, string)
    this.settingsChanged.emit(items)
  }
}
