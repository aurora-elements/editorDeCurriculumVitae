import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  itemLists = [
    {
      id: 'id1',
      title: 'list-1'
    },
    {
      id: 'id2',
      title: 'list-2'
    },
    {
      id: 'id3',
      title: 'list-3'
    }
  ]

  get() {
    return this.itemLists
  }
}
