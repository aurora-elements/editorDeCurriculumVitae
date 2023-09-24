import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  headline: string = 'List of items'

  items = [
    {
      id: 1,
      title: 'item-1'
    }
  ]
}
