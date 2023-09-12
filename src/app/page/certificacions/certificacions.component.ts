import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { CertificacionsService } from 'src/app/services/certificacions.service';

@Component({
  selector: 'app-certificacions',
  templateUrl: './certificacions.component.html',
  styleUrls: ['./certificacions.component.scss'],
  providers: [CertificacionsService]
})
export class CertificacionsComponent implements OnInit {
  certificacions: Array<string> = []

  constructor(
    private dialog: MatDialog, 
    private certificacionsService: CertificacionsService) {
    this.certificacionsService.get()
  }

  ngOnInit(): void {
    this.certificacions = this.certificacionsService.items
  }

  edit(): void {
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        name: 'Zertifizierungen',
        storageName: 'certificacions',
        isObjectArray: false,
        items: this.certificacions
      }
    })
  }
}
