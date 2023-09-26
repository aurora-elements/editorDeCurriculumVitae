import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { SettingsService } from '../settings/settings.service';
import { ListService } from '../list/list.service';
import { MatDialog } from '@angular/material/dialog';
import { ListDialogComponent } from '../list/list-dialog/list-dialog.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  showTopSkills: boolean
  showCertificacions: boolean
  showAboutMe: boolean
  showLanguages: boolean

  itemLists: {id: string, title: string}[] = []

  constructor(
    private settingsService: SettingsService,
    private listService: ListService,
    private dialog: MatDialog
  ) {
    this.showTopSkills = this.settingsService.getSetting('showTopSkills')
    this.showCertificacions = this.settingsService.getSetting('showCertificacions')
    this.showAboutMe = this.settingsService.getSetting('showAboutMe')
    this.showLanguages = this.settingsService.getSetting('showLanguages')
  }

  ngOnInit() {
    this.settingsService.settingsChanged
      .subscribe((settings: Array<string>) => {
        this.showTopSkills = this.settingsService.getSetting('showTopSkills', settings)
        this.showCertificacions = this.settingsService.getSetting('showCertificacions', settings)
        this.showAboutMe = this.settingsService.getSetting('showAboutMe', settings)
        this.showLanguages = this.settingsService.getSetting('showLanguages', settings)
      })

    this.itemLists = this.listService.get()
    console.log('lists: ', this.itemLists)

    this.listService.update.subscribe(() => {
      this.itemLists = this.listService.get()
    })
    
  }

  createNewList() {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '400px',
      disableClose: true
    })

    dialogRef.componentInstance.submitAddEvent.subscribe(list => {
      if (list) {
        console.log('list: ', list)
        this.listService.create(list.id, list.title)
      }
    })
  }
}
