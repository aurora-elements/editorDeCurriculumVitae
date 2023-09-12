import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ILanguage } from 'src/app/models/language.model';
import { LanguagesService } from 'src/app/services/languages.service';

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
    this.dialog.open(DialogComponent, {
      width: '400px',
      data: {
        name: 'Sprachen',
        isObjectArray: true,
        items: this.languages
      }
    })
  }
}
