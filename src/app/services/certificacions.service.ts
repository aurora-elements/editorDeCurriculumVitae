import { Injectable } from "@angular/core"
import { LocalService } from "./local.service"

@Injectable()
export class CertificacionsService {
  constructor(private localStorage: LocalService) { }

  items: Array<string> = []
  storeName = 'certificacions'
  itemsStore = this.localStorage.getData(this.storeName)

  placeholder = [
    'Zertifizierung 1', 
    'Zertifizierung 2', 
    'Zertifizierung 3'
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