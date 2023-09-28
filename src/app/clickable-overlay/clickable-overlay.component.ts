import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clickable-overlay',
  templateUrl: './clickable-overlay.component.html',
  styleUrls: ['./clickable-overlay.component.scss']
})
export class ClickableOverlayComponent {
  @Output()
  editEvent = new EventEmitter<any>();

  @Input('sub-item')
  subItem: boolean = false

  edit() {
    this.editEvent.emit()
  }
}
