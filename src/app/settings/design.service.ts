import { EventEmitter, Injectable } from '@angular/core';
import { IDesign } from './design.model';
import { LocalService } from '../shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private localService: LocalService) { }

  private items: IDesign = {
    mainBgColor: '#2c323e',
    headlineColor: '#2c323e',
    headlineFont: 'Calibri'
  }
  private storeName = 'design'
  private store = this.localService.getData(this.storeName)

  designChanged = new EventEmitter<IDesign>()

  private defaultValues: IDesign = {
    mainBgColor: '#2c323e',
    headlineColor: '#2c323e',
    headlineFont: 'Calibri'
  }

  get() {
    if(this.store !== null) {
      const itemsObject = JSON.parse(this.store)

      this.items = itemsObject

    } else {
      this.items = this.defaultValues
    }

    return this.items
  }

  getSingleDesign(key: string) {
    let designObject: IDesign = this.get()

    if (key in designObject) {
      return designObject[key]
    }

    return ''
  }

  set(items: IDesign) {
    const itemsObject = JSON.stringify(items)

    this.localService.saveData(this.storeName, itemsObject)
    this.designChanged.emit(items)
  }
}
