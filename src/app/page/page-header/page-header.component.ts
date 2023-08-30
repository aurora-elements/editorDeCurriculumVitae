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
  name: string = 'Wie lautet dein Name'
  @Input()
  position: string = 'Welchen Job hast du zur Zeit?'

  ngOnInit() {
    
  }
}
