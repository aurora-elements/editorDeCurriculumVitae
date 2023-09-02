import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-certificacions',
  templateUrl: './dialog-certificacions.component.html',
  styleUrls: ['./dialog-certificacions.component.scss']
})
export class DialogCertificacionsComponent {
  certificacions: Array<string> = [
    'Vue 3',
    'Vue 2, Vuetify & Vuex',
    'Angular 2',
    'Typescript 2',
    'Web-Components'
  ]
}
