import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from './list-item/list-item.service';
import { LocalService } from '../shared/local.service';
import { ListService } from './list.service';
import { MatDialog } from '@angular/material/dialog';
import { IListItem } from './item.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { IList } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  storeId!: string
  
  headline: string = `List-${Math.random().toString(36).slice(2)}`

  list!: IList;

  items!: IListItem[];

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
       this.list = itemsObject.find((list: { id: string; }) => list.id === this.storeId)
      this.headline = this.list.title 
    }
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: 'Willst du diese Liste, mit allen Einträgen, wirklich löschen?'
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.listService.delete(this.storeId)
      }
    })
  }

  edit() {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '500px',
      disableClose: true,
      data: this.list
    })

    dialogRef.componentInstance.submitEditEvent.subscribe(list => {
      if (list) {
        this.listService.edit(list)
      }
    })
  }
}
