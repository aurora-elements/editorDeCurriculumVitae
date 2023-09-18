import { Component, OnInit } from '@angular/core';
import { DesignService } from './settings/design.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mainBgColor: string
  headlineColor: string
  headlineFont: string

  constructor(private designService: DesignService) {
    this.mainBgColor = this.designService.getSingleDesign('mainBgColor')
    this.headlineColor = this.designService.getSingleDesign('headlineColor')
    this.headlineFont = this.designService.getSingleDesign('headlineFont')
  }

  ngOnInit(): void {
    this.designService.designChanged
      .subscribe((design) => {
        this.mainBgColor = design['mainBgColor'],
        this.headlineColor = design['headlineColor'],
        this.headlineFont = design['headlineFont']
      })
  }
}
