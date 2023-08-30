import { Component } from '@angular/core';

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
}
