import { EventEmitter, Injectable } from '@angular/core';
import { LocalService } from 'src/app/shared/local.service';
import { IAvatar } from './avatar.model';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private localService: LocalService) { }

  // Event to update UI
  update = new EventEmitter<any>()

  // Event to update Dialog Avatar
  updateLocal = new EventEmitter<any>()

  private storeName = 'avatar'
  private store = ''

  private placeholder: IAvatar = {
    url: './assets/img/avatar.jpg',
    positionX: 'center',
    positionY: 'center',
    size: 'cover',
    isColor: false,
    rounded: true,
    aspectRatio: '1/1',
    backgroundColor: '#2c323e'
  }
  private items: IAvatar = this.placeholder

  // Get all items from store, if available or get from placeholder object
  get() {
    this.store = this.localService.getData(this.storeName)!
    
    if (this.store !== null) {

      const itemsObject = JSON.parse(this.store)

      if (itemsObject) {
        this.items = itemsObject
      } else {
        this.items = this.placeholder
      }

    } else {
      this.items = this.placeholder
    }

    return this.items
  }

  // Set items to the store
  set(item: IAvatar) {
    const itemsObject = JSON.stringify(item)

    this.localService.saveData(this.storeName, itemsObject)

    this.update.emit()
  }

  setLocale(item: IAvatar) {
    this.items = item

    this.updateLocal.emit()
  }

  getLocale() {
    return this.items
  }
}
