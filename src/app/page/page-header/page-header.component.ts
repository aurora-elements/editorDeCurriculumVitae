import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input()
  avatarUrl: string = './assets/img/avatar.jpg'
  @Input()
  name: string = '<i class="color-primary">Vorname Nachname</i>'
  @Input()
  position: string = '<i class="color-primary">Mein Job</i>'

  ngOnInit() {
    
  }
}
