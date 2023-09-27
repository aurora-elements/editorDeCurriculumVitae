import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from './list-item/list-item.service';
import { LocalService } from '../shared/local.service';
import { ListService } from './list.service';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  storeId!: string
  
  headline: string = `List-${Math.random().toString(36).slice(2)}`

  items!: {
    id: number,
    title: string,
    titleLeft: string,
    subtitleLeft: string,
    desc: string
  }[];

  constructor(
    private itemService: ItemService,
    private listService: ListService,
    private localService: LocalService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.items = this.itemService.get(this.storeId)
    const store = this.localService.getData('lists')

    if(store !== null) {
      this.itemService.create(this.storeId)

      const itemsObject = JSON.parse(store)

      this.items = this.itemService.get(this.storeId)
      const list = itemsObject.find((list: { id: string; }) => list.id === this.storeId)
      this.headline = list.title 
    }
  }

  createNewList() {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '500px',
      disableClose: true
    })

    dialogRef.componentInstance.submitAddEvent.subscribe((list: { id: string; title: string; }) => {
      if (list) {
        console.log('list: ', list)
        this.listService.create(list.id, list.title)
      }
    })
  }

  delete() {}

  edit() {}
}
