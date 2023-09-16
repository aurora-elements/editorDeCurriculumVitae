import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from 'src/app/page/contact/contact.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IContactData } from '../contact-data.interface';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialog: IContactData,
    private contactService: ContactService) {
  }

  contactForm = new FormGroup({
    phone: new FormControl(this.dialog.phone),
    eMail: new FormControl(this.dialog.eMail),
    street: new FormControl(this.dialog.street),
    zipCodeAndCity: new FormControl(this.dialog.zipCodeAndCity)
  })

  onSubmit() {
    const contactData = {
      phone: this.contactForm.value.phone ? this.contactForm.value.phone : this.dialog.phone,
      eMail: this.contactForm.value.eMail ? this.contactForm.value.eMail : this.dialog.eMail,
      street: this.contactForm.value.street ? this.contactForm.value.street : this.dialog.street,
      zipCodeAndCity: this.contactForm.value.zipCodeAndCity ? this.contactForm.value.zipCodeAndCity : this.dialog.zipCodeAndCity
    }

    this.contactService.set(contactData)
  }
}
