import { Injectable } from '@angular/core';
import { LocalService } from 'src/app/shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private localService: LocalService) { }

  items = []

  create(storeId: string) {
    console.log('create items')
    const generateID = () => {
      return Math.random().toString(36).slice(2)
    }
    const UID = generateID() 
    const items = [
      {
        id: UID,
        title: `item-${UID}`
      }
    ]
    const itemsArray = JSON.stringify(items)

    this.localService.saveData(storeId, itemsArray)
  }

  get(storeId: string) {
    console.log('store id: ', storeId)
    const store = this.localService.getData(storeId)!

    if(store !== null) {
      const itemsArray = JSON.parse(store)
      this.items = itemsArray
    }

    return this.items
  }
}
