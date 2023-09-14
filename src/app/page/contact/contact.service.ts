import { EventEmitter, Injectable } from '@angular/core';
import { IContactData } from './contact-data.interface';
import { LocalService } from 'src/app/shared/local.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private localStorage: LocalService) { }
  
  private storeName = 'contact-data'
  private contactStore = this.localStorage.getData(this.storeName)
  contactDataChanged = new EventEmitter<IContactData>()

  contactData: IContactData = {
    phone: '00000 / 000000',
    eMail: 'deine.e.mail@email.de',
    street: 'Straßenname',
    zipCodeAndCity: 'PLZ Wohnort'
  }

  get() {
    if (this.contactStore !== null) {

      const itemsArray = JSON.parse(this.contactStore)

      if (itemsArray) {
        this.contactData = itemsArray
      }
    }
    return this.contactData
  }

  set(contactData: IContactData) {
    const itemsArray = JSON.stringify(contactData)
    this.localStorage.saveData(this.storeName, itemsArray)
    this.contactDataChanged.emit(contactData)
  }
}
