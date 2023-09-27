import { Component, Input, OnInit } from '@angular/core';
import { IListItem } from '../item.model';
import { IList } from '../list.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  index!: number

  @Input()
  item!: IListItem

  @Input()
  storeId!: string

  store: any;

  constructor(private listService: ListService) {
    
  }

  ngOnInit(): void {
    this.store = this.listService.getById(this.storeId)
  }


  edit() {}

  add() {}

  delete() {}
}
