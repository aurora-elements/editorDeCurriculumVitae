import { Component, Input, OnInit } from '@angular/core';
import { AvatarService } from '../avatar.service';
import { IAvatar } from '../avatar.model';
import { MatDialog } from '@angular/material/dialog';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input()
  item!: IAvatar;

  @Input()
  editable: boolean = true

  constructor(
    private dialog: MatDialog,
    private service: AvatarService
  ) {

  }

  styleObject(): Object {
    const styles = {
      backgroundImage: `url(${this.item.url})`,
      backgroundPosition: `${this.item.positionX} ${this.item.positionY}`,
      backgroundSize: this.item.size,
      filter: `grayscale(${this.item.isColor ? '0' : '1'})`,
      borderRadius: this.item.rounded ? '100%' : '0',
      aspectRatio: this.item.aspectRatio,
      backgroundColor: this.item.backgroundColor
    }
      return styles
  }

  ngOnInit(): void {
    if (this.editable) {
      this.item = this.service.get()
    }

    this.service.updateLocal.subscribe(() => {
      this.item = this.service.getLocale()
    })

    this.styleObject()
  }

  edit() {
    this.dialog.open(AvatarDialogComponent, {
      width: '800px',
      disableClose: true,
      data: this.item
    })
  }
}
