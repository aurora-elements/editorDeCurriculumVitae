import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogCertificacionsComponent } from './dialog-certificacions/dialog-certificacions.component';

@Component({
  selector: 'app-certificacions',
  templateUrl: './certificacions.component.html',
  styleUrls: ['./certificacions.component.scss']
})
export class CertificacionsComponent {
  certificacions: Array<string> = [
    'Vue 3',
    'Vue 2, Vuetify & Vuex',
    'Angular 2',
    'Typescript 2',
    'Web-Components'
  ]

  constructor(private dialog: MatDialog) { }

  editCertificacions() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(DialogCertificacionsComponent, dialogConfig);
  }
}
