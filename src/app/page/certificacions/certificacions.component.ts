import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LocalService } from '../../services/local.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-certificacions',
  templateUrl: './certificacions.component.html',
  styleUrls: ['./certificacions.component.scss']
})
export class CertificacionsComponent {
  certificacions: Array<string>

  constructor(private dialog: MatDialog, private localStorage: LocalService) {
    if (this.localStorage.getData('certificacions') !== null) {

      const string = this.localStorage.getData('certificacions')
      const certificacionsArray = string!.split(/,/)
      this.certificacions = certificacionsArray

    } else {
      this.certificacions = [
        'Zertifizierung 1',
        'Zertifizierung 2',
        'Zertifizierung 3'
      ]
    }
  }

  edit(): void {
    this.dialog.open(DialogComponent, {
      data: {
        name: 'Zertifizierungen',
        storageName: 'certificacions',
        items: this.certificacions
      }
    })
  }
}
