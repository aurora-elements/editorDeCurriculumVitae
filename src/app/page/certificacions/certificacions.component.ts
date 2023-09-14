import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { CertificacionsService } from 'src/app/page/certificacions/certificacions.service';
import { CertificationsDialogComponent } from './certificacions-dialog/certificacions-dialog.component';

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
  }

  ngOnInit(): void {
    this.certificacions = this.certificacionsService.get()
  }

  @HostListener('click') onclick() {
    this.dialog.open(CertificationsDialogComponent, {
      width: '400px',
      data: {
        items: this.certificacions
      }
    })
  }
}
