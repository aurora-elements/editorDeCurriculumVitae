import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input()
  phone: string = 'Deine Telefonnummer'
  @Input()
  email: string = 'deine@email.adresse'
  @Input()
  address: string = 'Straßenname, <br> PLZ Wohnort'
}
