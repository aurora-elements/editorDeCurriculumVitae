import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from './list-item/list-item.service';
import { LocalService } from '../shared/local.service';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  storeId!: string
  
  headline: string = `List-${Math.random().toString(36).slice(2)}`

  items!: { id: number; title: string; }[];

  constructor(
    private itemService: ItemService,
    private listService: ListService,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.get(this.storeId)
    const store = this.localService.getData('lists')
    console.log('store: ', store)
    if(store !== null) {
      this.itemService.create(this.storeId)

      const itemsObject = JSON.parse(store)

      this.items = this.itemService.get(this.storeId)
      const list = itemsObject.find((list: { id: string; }) => list.id === this.storeId)
      this.headline = list.title // das ist das Problem [0]
    }
  }
}
