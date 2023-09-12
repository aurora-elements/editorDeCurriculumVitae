import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CertificacionsService } from 'src/app/services/certificacions.service';
import { DialogCertificationsComponent } from './dialog/dialog.component';

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
    this.dialog.open(DialogCertificationsComponent, {
      width: '400px',
      data: {
        items: this.certificacions
      }
    })
  }
}
