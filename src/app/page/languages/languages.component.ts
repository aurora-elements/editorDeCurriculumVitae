import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ILanguage } from 'src/app/models/language.model';
import { LanguagesService } from 'src/app/services/languages.service';
import { DialogLanguagesComponent } from './dialog/dialog.component';

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
    langService.get()

  }

  ngOnInit(): void {
    this.languages = this.langService.items
  }

  edit(): void {
    this.dialog.open(DialogLanguagesComponent, {
      width: '400px',
      data: {
        items: this.languages
      }
    })
  }
}
