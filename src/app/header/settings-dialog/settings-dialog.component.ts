import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatSlideToggleModule]
})
export class SettingsDialogComponent {
  showTopSkills: boolean
  showCertificacions: boolean
  showAboutMe: boolean

  constructor(private localStore: LocalService) {
    this.showTopSkills = this.localStore.getData('showTopSkills') as unknown as boolean
    this.showCertificacions = this.localStore.getData('showCertificacions') as unknown as boolean
    this.showAboutMe = this.localStore.getData('showAboutMe') as unknown as boolean
  }

  onChange($event: MatSlideToggleChange) {
    const key = $event.source.name as string
    const value = $event.source.checked as unknown as string
    
    if (value) {
      this.localStore.saveData(key, value)
    } else {
      this.localStore.removeData(key)
    }
  }
}

