import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  elementToZoom!: HTMLElement;
  bookTransformValue: string = ''
  
  constructor(
  ) {}

 windowPrint() {
   this.elementToZoom = document.querySelector('.book')!
   this.elementToZoom.style!.transform = 'scale(1)'
   return window.print()
 }

}
