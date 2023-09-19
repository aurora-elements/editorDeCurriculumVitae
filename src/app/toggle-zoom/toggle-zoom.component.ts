import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-zoom',
  templateUrl: './toggle-zoom.component.html',
  styleUrls: ['./toggle-zoom.component.scss']
})
export class ToggleZoomComponent implements OnInit {
  elementToZoom: HTMLElement;
  bookTransformValue: string = ''

  disableZoomIn = false
  disableZoomOut = true
  disableZoomReset = true

  scaleLevels = {
    0: '',
    2: 'scale(1.2)',
    4: 'scale(1.4)',
    6: 'scale(1.6)'
  }

  constructor() {
    this.elementToZoom = document.querySelector('.book')!
  }

  ngOnInit(): void {
    this.elementToZoom = document.querySelector('.book')!
    this.bookTransformValue = this.elementToZoom.style!.transform
  }
  
  zoomIn() {
    switch (this.bookTransformValue) {
      case this.scaleLevels[2]:
        this.elementToZoom.style.transform = this.scaleLevels[4]
        break;
      case this.scaleLevels[4]:
        this.elementToZoom.style.transform = this.scaleLevels[6]
        this.disableZoomIn = true
        break;
      default:
        this.elementToZoom.style.transform = this.scaleLevels[2]
        this.disableZoomOut = false
        this.disableZoomReset = false
    }

    this.bookTransformValue = this.elementToZoom.style!.transform
  }

  zoomOut() {
    switch (this.bookTransformValue) {
      case this.scaleLevels[2]:
        this.elementToZoom.style.transform = this.scaleLevels[0]
        this.disableZoomIn = false
        this.disableZoomOut = true
        this.disableZoomReset = true
        break;
      case this.scaleLevels[4]:
        this.elementToZoom.style.transform = this.scaleLevels[2]
        this.disableZoomIn = false
        this.disableZoomOut = false
        break;
      case this.scaleLevels[6]:
        this.elementToZoom.style.transform = this.scaleLevels[4]
        this.disableZoomIn = true
        break;
    }

    this.bookTransformValue = this.elementToZoom.style!.transform
  }

  zoomReset() {
    this.elementToZoom.style.transform = this.scaleLevels[0]
    this.bookTransformValue = this.elementToZoom.style!.transform
    this.disableZoomIn = false
    this.disableZoomOut = true
    this.disableZoomReset = true
  }
}
