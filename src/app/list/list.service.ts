import { EventEmitter, Injectable } from '@angular/core';
import { LocalService } from '../shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private localService: LocalService) { }

  // Event to update UI
  update = new EventEmitter<any>()

  itemLists: {id: string, title: string}[] = []

  get() {
    const store = this.localService.getData('lists')
    if(store !== null) {
      const storeArray = JSON.parse(store)
      this.itemLists = storeArray
    }
    return this.itemLists
  }

  create(storeId: string, title: string) {
    
    const store = {
      id: storeId,
      title: title
    }

    const storeItems = this.get()
    storeItems.push(store)
    console.log('storeItems: ', storeItems)

    const storeObject = JSON.stringify(storeItems)
    this.localService.saveData('lists', storeObject)

    this.update.emit()
  }
}
