import { Injectable } from "@angular/core"
import { ILanguage } from "../models/language.model"
import { LocalService } from "./local.service"

@Injectable()
export class LanguagesService {

  constructor(private localStorage: LocalService) {}

  items: Array<ILanguage> = []
  storeName = 'languages'
  itemsStore = this.localStorage.getData(this.storeName)

  placeholder = [
    {
      name: 'Sprache 1',
      level: 4
    },
    {
      name: 'Sprache 2',
      level: 3
    },
    {
      name: 'Sprache 3',
      level: 2
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
  }

  set(items:ILanguage[]) {
    const itemsArray = JSON.stringify(items)
    this.localStorage.saveData(this.storeName, itemsArray)
  }
}