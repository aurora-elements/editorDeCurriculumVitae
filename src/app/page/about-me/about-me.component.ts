import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @Input()
  aboutMe: string = '<i class="color-primary">Schreib etwas über dich, deine Kenntnisse, deine Erfahrungen usw.</i>'
}
