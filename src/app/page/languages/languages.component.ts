import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ILanguage } from 'src/app/page/languages/language.model';
import { LanguagesService } from 'src/app/page/languages/languages.service';
import { LanguagesDialogComponent } from './languages-dialog/languages-dialog.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  providers: [LanguagesService]
})
export class LanguagesComponent implements OnInit {
  languages:Array<ILanguage> = []

  constructor(
    private dialog: MatDialog, 
    private langService: LanguagesService) {

  }

  ngOnInit(): void {
    this.languages = this.langService.get()
  }

  @HostListener('click') onclick() {
    this.dialog.open(LanguagesDialogComponent, {
      width: '400px',
      data: {
        items: this.languages
      }
    })
  }
}
