import { Injectable } from '@angular/core';
import { IDesign } from './design.model';
import { LocalService } from '../shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private localService: LocalService) { }

  private items: Array<IDesign> = []
  private storeName = 'design'
  private store = this.localService.getData(this.storeName)

  private defaultValues = [
    {
      key: 'mainBgColor',
      value: '#2c323e'
    }
  ]

  get() {
    if(this.store !== null) {
      const itemsArray = JSON.parse(this.store)

      if(itemsArray.length > 0) {
        this.items = itemsArray
      } else {
        this.items = this.defaultValues
      }

    } else {
      this.items = this.defaultValues
    }

    return this.items
  }

  set(items: IDesign[]) {
    const itemsArray = JSON.stringify(items)
    this.localService.saveData(this.storeName, itemsArray)
  }
}
