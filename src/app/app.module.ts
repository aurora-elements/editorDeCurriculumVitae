import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './settings/settings.component';
import { PageHeaderComponent } from './page/page-header/page-header.component';
import { ContactComponent } from './page/contact/contact.component';
import { TopSkillsComponent } from './page/top-skills/top-skills.component';
import { CertificacionsComponent } from './page/certificacions/certificacions.component';
import { LanguagesComponent } from './page/languages/languages.component';
import { AboutMeComponent } from './page/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    SettingsComponent,
    PageHeaderComponent,
    ContactComponent,
    TopSkillsComponent,
    CertificacionsComponent,
    LanguagesComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatSlideToggleModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
