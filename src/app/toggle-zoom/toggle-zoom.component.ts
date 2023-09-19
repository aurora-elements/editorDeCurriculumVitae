import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-zoom',
  templateUrl: './toggle-zoom.component.html',
  styleUrls: ['./toggle-zoom.component.scss']
})
export class ToggleZoomComponent {
  elementToZoom = '.book'
  disableZoomIn = false
  disableZoomOut = true
  disableZoomReset = true

  scaleLevels = {
    0: '',
    2: 'scale(1.2)',
    4: 'scale(1.4)',
    6: 'scale(1.6)'
  }
  zoomIn() {
    const bookTransformValue: string = (document.querySelector(this.elementToZoom) as HTMLElement).style.transform

    switch (bookTransformValue) {
      case this.scaleLevels[2]:
        (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[4]
        break;
      case this.scaleLevels[4]:
        (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[6]
        this.disableZoomIn = true
        break;
      default:
        (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[2]
        this.disableZoomOut = false
        this.disableZoomReset = false
    }
  }

  zoomOut() {
    const bookTransformValue: string = (document.querySelector(this.elementToZoom) as HTMLElement).style.transform

    switch (bookTransformValue) {
      case this.scaleLevels[2]:
        (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[0]
        this.disableZoomIn = false
        this.disableZoomOut = true
        this.disableZoomReset = true
        break;
      case this.scaleLevels[4]:
        (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[2]
        this.disableZoomIn = false
        this.disableZoomOut = false
        break;
      case this.scaleLevels[6]:
        (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[4]
        this.disableZoomIn = true
        break;
    }
  }

  zoomReset() {
    (document.querySelector(this.elementToZoom) as HTMLElement).style.transform = this.scaleLevels[0]
    this.disableZoomIn = false
    this.disableZoomOut = true
    this.disableZoomReset = true
  }
}
