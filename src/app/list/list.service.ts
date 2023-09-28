import { EventEmitter, Injectable } from '@angular/core';
import { LocalService } from '../shared/local.service';
import { IList } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private localService: LocalService) { }

  // Event to update UI
  update = new EventEmitter<any>()

  itemLists: IList[] = []

  get() {
    const store = this.localService.getData('lists')
    if(store !== null) {
      const storeArray = JSON.parse(store)
      this.itemLists = storeArray
    }
    return this.itemLists
  }

  getById(id: string) {
    const listStore = this.get()
    const selectedList = listStore.find((list: { id: string; }) => list.id === id)

    return selectedList
  }

  create(storeId: string, list: IList) {
    
    const store = {
      id: storeId,
      title: list.title,
      itemsConfig: {
        useTitle: list.itemsConfig!.useTitle,
        useTitleLeft: list.itemsConfig!.useTitleLeft,
        useSubtitleLeft: list.itemsConfig!.useSubtitleLeft,
        useDesc: list.itemsConfig!.useDesc
      }
    }

    const storeItems = this.get()
    storeItems.push(store)

    const storeObject = JSON.stringify(storeItems)
    this.localService.saveData('lists', storeObject)

    this.update.emit()
  }

  // edit ist nicht fertig
  edit(list: IList) {
    const storeItems = this.get()

    function update(arr: IList[], id: string, updatedData: IList) {
      return arr.map(
        (item) => (item.id === id ? { 
            ...item, 
            ...updatedData 
          } : item
        )
      )
    }

    const result = update(storeItems, list.id, list)

    this.itemLists = result

    const storeObject = JSON.stringify(this.itemLists)
    this.localService.saveData('lists', storeObject)

    this.update.emit()
    
  }

  delete(listId: string) {
    function removeListtWithId(items: any[], id: any) {
      return items.filter((list) => list.id !== id);
    }

    const storeItems = this.get()
    const newListsArray = removeListtWithId(storeItems, listId)
    const newStoreItems = JSON.stringify(newListsArray)
    
    this.localService.saveData('lists', newStoreItems)

    this.localService.removeData(listId)

    this.update.emit()
  }
}
