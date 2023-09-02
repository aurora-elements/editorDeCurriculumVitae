import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  name: string = 'Marcus Kramer'
  position: string = 'Senior Web-Developer'
  phone: string = '01516 / 6136559'
  email: string = 'm.kramer.hannover<br>@gmail.com'
  address: string = 'Reichhelmstr. 4<br>30519 Hannover'
  aboutMe: string = `
    Seit mehr als 12 Jahren arbeite ich als Web-Entwickler und habe mich auf die
    Frontend-Entwicklung spezialisiert. Meine Schwerpunkte liegen in der UI/UX-Konzeption und der Entwicklung von modernen und
    responsiven UIs. Diese erstelle ich auf Basis von HTML, CSS, JavaScript und biete umfangreiche Kompetenzen 
    in bekannten Frameworks wie Vue, Typescript und Web-Componenten, für verschiedene Backend-technologien wie Java, .NET u.v.m.
  `

  languagesVisible: boolean = true

  @Input() showTopSkills: boolean
  @Input() showCertificacions: boolean
  @Input() showAboutMe: boolean
  @Input() showLanguages: boolean

  constructor(private localStore: LocalService) {
    this.showTopSkills = this.localStore.getData('showTopSkills') as unknown as boolean
    this.showCertificacions = this.localStore.getData('showCertificacions') as unknown as boolean
    this.showAboutMe = this.localStore.getData('showAboutMe') as unknown as boolean
    this.showLanguages = this.localStore.getData('showLanguages') as unknown as boolean
  }

  ngOnInit() {

  }
}
