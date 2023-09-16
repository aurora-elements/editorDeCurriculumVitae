import { EventEmitter, Injectable } from '@angular/core';
import { LocalService } from 'src/app/shared/local.service';
import { IPageHeader } from './page-header.model';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  constructor(private localService: LocalService) { }

  private storeName = 'page-header'
  private store = this.localService.getData(this.storeName)

  pageHeaderChanged = new EventEmitter<IPageHeader>()

  pageHeaderData: IPageHeader = {
    name: 'John Doe',
    job: 'Optimist'
  }

  get() {
    if (this.store !== null) {

      const itemsArray = JSON.parse(this.store)

      if (itemsArray) {
        this.pageHeaderData = itemsArray
      }
    }
    return this.pageHeaderData    
  }

  set(pageHeaderData: IPageHeader) {
    const itemsArray = JSON.stringify(pageHeaderData)

    this.localService.saveData(this.storeName, itemsArray)
    this.pageHeaderChanged.emit(pageHeaderData)
  }
}
