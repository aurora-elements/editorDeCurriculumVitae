import { EventEmitter, Injectable } from '@angular/core';
import { IExperience } from './experience.model';
import { LocalService } from '../shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private localStorage: LocalService) { }

  // Event to update UI
  update = new EventEmitter<any>()


  private items: Array<IExperience> = []
  private storeName = 'experience'
  private store: string = ''

  // Placeholder array 
  private placeholder: IExperience[] = [
    {
      id: 1,
      title: 'Job-Titel 1',
      period: '01.10.2023 - heute',
      company: 'Firma 1',
      desc: 'Beschreibung der Tätigkeiten, Aufgaben usw.'
    },
    {
      id: 2,
      title: 'Job-Titel 2',
      period: '01.01.2023 - 01.10.2023',
      company: 'Firma 2',
      desc: 'Beschreibung der Tätigkeiten, Aufgaben usw.'
    },
    {
      id: 3,
      title: 'Job-Titel 3',
      period: '01.01.2023 - 01.10.2023',
      company: 'Firma 3',
      desc: 'Beschreibung der Tätigkeiten, Aufgaben usw.'
    }
  ]

  // Get all items from store, if available or get from placeholder array
  get() {
    this.store = this.localStorage.getData(this.storeName)!

    if (this.store !== null) {

      const itemsArray = JSON.parse(this.store)

      if (itemsArray.length > 0) {
        this.items = itemsArray
      } else {
        this.items = this.placeholder
      }

    } else {
      this.items = this.placeholder
    }

    return this.items
  }

  // Private method to set items to the store
  private set(items: IExperience[]) {
    const itemsArray = JSON.stringify(items)

    this.localStorage.saveData(this.storeName, itemsArray)

    this.update.emit()
  }

  // Add an item
  add(item: IExperience) {
    const id = this.items.length + 1

    const itemEl = {
      id: id,
      title: item.title,
      period: item.period,
      company: item.company,
      desc: item.desc,
    }

    this.items.push(itemEl)

    this.set(this.items)
  }

  // Edit an existing item
  edit(item: IExperience) {
    const modifiedItems = this.items.map(obj => {
      if (obj.id === item.id) {
        return { 
          ...obj, 
          title: item.title,
          period: item.period,
          company: item.company,
          desc: item.desc
        };
      }
      return obj;
    });

    this.items = modifiedItems

    this.set(this.items)
  }

  // Delete item from store
  delete(index: number) {
    this.get()

    this.items.splice(index, 1)

    this.set(this.items)

  }
}
