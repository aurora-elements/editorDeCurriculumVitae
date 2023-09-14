import { Injectable } from "@angular/core"
import { LocalService } from "../../shared/local.service"

@Injectable()
export class TopSkillsService {
  constructor(private localStorage: LocalService) { }

  private items: Array<string> = []
  private storeName = 'top-skills'
  private itemsStore = this.localStorage.getData(this.storeName)

  private placeholder = [
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

    return this.items.slice()
  }

  set(items: string[]) {
    let string = items.toString()
    this.localStorage.saveData(this.storeName, string)
  }
}