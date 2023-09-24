import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input()
  index!: number

  @Input()
  item!: {id: number, title:string} 

  edit() {}

  add() {}

  delete() {}
}
