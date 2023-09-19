import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactService } from './contact.service';
import { IContactData } from './contact-data.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData: IContactData

  constructor(
    private dialog: MatDialog,
    private contactService: ContactService) {
    this.contactData = this.contactService.get()
  }

  ngOnInit(): void {
    this.contactService.contactDataChanged
      .subscribe((contactData) => {
        this.contactData = contactData
      })
  }

  @HostListener('click') onclick() {
    this.dialog.open(ContactDialogComponent, {
      width: '400px',
      data: {
        phone: this.contactData.phone,
        eMail: this.contactData.eMail,
        street: this.contactData.street,
        zipCodeAndCity: this.contactData.zipCodeAndCity
      }
    })
  }
}
