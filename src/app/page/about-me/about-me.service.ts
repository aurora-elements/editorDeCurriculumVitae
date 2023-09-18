import { EventEmitter, Injectable } from '@angular/core';
import { LocalService } from 'src/app/shared/local.service';
import { IAboutMe } from './about-me.model';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private localService: LocalService) { }

  private storeName = 'about-me'
  private store = this.localService.getData(this.storeName)

  aboutMeChanged = new EventEmitter<IAboutMe>()

  aboutMeData: IAboutMe = {
    aboutMe: 'Schreib etwas über dich, deine Kenntnisse, deine Erfahrungen usw.'
  }

  get() {
    if (this.store !== null) {

      const itemsArray = JSON.parse(this.store)

      if (itemsArray) {
        this.aboutMeData = itemsArray
      }
    }
    return this.aboutMeData  
  }
  set(items: IAboutMe) {
    const itemsArray = JSON.stringify(items)

    this.localService.saveData(this.storeName, itemsArray)
    this.aboutMeChanged.emit(items)
  }
}
