import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input()
  phone: string = '<i class="color-primary">Deine Telefonnummer</i>'
  @Input()
  email: string = '<i class="color-primary">deine@email.adresse</i>'
  @Input()
  address: string = '<i class="color-primary">Straßenname, <br> PLZ Wohnort</i>'
}
