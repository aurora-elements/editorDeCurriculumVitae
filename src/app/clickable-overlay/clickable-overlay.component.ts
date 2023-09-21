import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-clickable-overlay',
  templateUrl: './clickable-overlay.component.html',
  styleUrls: ['./clickable-overlay.component.scss']
})
export class ClickableOverlayComponent {
  @Output()
  editEvent = new EventEmitter<any>();

  edit() {
    this.editEvent.emit()
  }
}
