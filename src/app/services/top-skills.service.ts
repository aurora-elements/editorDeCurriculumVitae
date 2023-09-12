import { Injectable } from "@angular/core"
import { LocalService } from "./local.service"

@Injectable()
export class TopSkillsService {
  constructor(private localStorage: LocalService) { }

  items: Array<string> = []
  storeName = 'top-skills'
  itemsStore = this.localStorage.getData(this.storeName)

  placeholder = [
    'Top-Skill 1', 
    'Top-Skill 2', 
    'Top-Skill 3'
  ]

  get() {
    if (this.itemsStore !== null) {

      const itemsArray = this.itemsStore.split(/,/)

      if (itemsArray.length > 0) {
        this.items = itemsArray
      } else {
        this.items = this.placeholder
      }

    } else {
      this.items = this.placeholder
    }
  }

  set(items: string[]) {
    let string = items.toString()
    this.localStorage.saveData(this.storeName, string)
  }
}