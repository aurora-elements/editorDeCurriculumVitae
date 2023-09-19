import { Injectable } from '@angular/core';
import { IExperience } from './experience.model';
import { LocalService } from '../shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private localStorage: LocalService) { }

  private items: Array<IExperience> = []
  private storeName = 'experience'
  private itemsStore = this.localStorage.getData(this.storeName)

  private placeholder: IExperience[] = [
    {
      title: 'Job-Titel 1',
      period: '01.10.2023 - heute',
      company: 'Firma 1',
      desc: 'Beschreibung der Tätigkeiten, Aufgaben usw.'
    },
    {
      title: 'Job-Titel 2',
      period: '01.01.2023 - 01.10.2023',
      company: 'Firma 2',
      desc: 'Beschreibung der Tätigkeiten, Aufgaben usw.'
    }
  ]

  get() {
    if (this.itemsStore !== null) {

      const itemsArray = JSON.parse(this.itemsStore)

      if (itemsArray.length > 0) {
        this.items = itemsArray
      } else {
        this.items = this.placeholder
      }

    } else {
      this.items = this.placeholder
    }

    return this.items.slice()
  }

  set(items: IExperience[]) {
    const itemsArray = JSON.stringify(items)
    this.localStorage.saveData(this.storeName, itemsArray)
  }
}
