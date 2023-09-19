import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-zoom',
  templateUrl: './toggle-zoom.component.html',
  styleUrls: ['./toggle-zoom.component.scss']
})
export class ToggleZoomComponent {
  disableZoomIn = false
  disableZoomOut = true
  zoomIn() {
    const bookTransformValue: string = (document.querySelector('.book') as HTMLElement).style.transform

    switch (bookTransformValue) {
      case 'scale(1.2)':
        (document.querySelector('.book') as HTMLElement).style.transform = 'scale(1.4)'
        break;
      case 'scale(1.4)':
        (document.querySelector('.book') as HTMLElement).style.transform = 'scale(1.6)'
        this.disableZoomIn = true
        break;
      default:
        (document.querySelector('.book') as HTMLElement).style.transform = 'scale(1.2)'
        this.disableZoomOut = false
    }
  }

  zoomOut() {
    const bookTransformValue: string = (document.querySelector('.book') as HTMLElement).style.transform

    switch (bookTransformValue) {
      case 'scale(1.2)':
        (document.querySelector('.book') as HTMLElement).style.transform = ''
        this.disableZoomIn = false
        this.disableZoomOut = true
        break;
      case 'scale(1.4)':
        (document.querySelector('.book') as HTMLElement).style.transform = 'scale(1.2)'
        this.disableZoomIn = false
        this.disableZoomOut = false
        break;
      case 'scale(1.6)':
        (document.querySelector('.book') as HTMLElement).style.transform = 'scale(1.4)'
        this.disableZoomIn = true
        break;
    }
  }
}
