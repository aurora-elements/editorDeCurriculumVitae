import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { NgFor } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

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
import { CertificationsDialogComponent } from './page/certificacions/certificacions-dialog/certificacions-dialog.component';
import { LanguagesDialogComponent } from './page/languages/languages-dialog/languages-dialog.component';
import { TopSkillsDialogComponent } from './page/top-skills/top-skills-dialog/top-skills-dialog.component';
import { ContactDialogComponent } from './page/contact/contact-dialog/contact-dialog.component';
import { ClickableOverlayComponent } from './clickable-overlay/clickable-overlay.component';
import { PageHeaderDialogComponent } from './page/page-header/page-header-dialog/page-header-dialog.component';
import { AboutMeDialogComponent } from './page/about-me/about-me-dialog/about-me-dialog.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';
import { ExperienceListComponent } from './experience/experience-list/experience-list.component';
import { ToggleFullscreenComponent } from './header/toggle-fullscreen/toggle-fullscreen.component';
import { ToggleZoomComponent } from './toggle-zoom/toggle-zoom.component';
import { ExperienceDialogComponent } from './experience/experience-item/experience-dialog/experience-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AvatarDialogComponent } from './page/avatar/avatar-dialog/avatar-dialog.component';
import { AvatarComponent } from './page/avatar/avatar/avatar.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListItemDialogComponent } from './list/list-item/list-item-dialog/list-item-dialog.component';
import { ListDialogComponent } from './list/list-dialog/list-dialog.component';

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
    AboutMeComponent,
    CertificationsDialogComponent,
    LanguagesDialogComponent,
    TopSkillsDialogComponent,
    ContactDialogComponent,
    ClickableOverlayComponent,
    PageHeaderDialogComponent,
    AboutMeDialogComponent,
    ExperienceItemComponent,
    ExperienceListComponent,
    ToggleFullscreenComponent,
    ToggleZoomComponent,
    ExperienceDialogComponent,
    ConfirmDialogComponent,
    AvatarDialogComponent,
    AvatarComponent,
    ListComponent,
    ListItemComponent,
    ListItemDialogComponent,
    ListDialogComponent
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
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatTabsModule,
    MatTooltipModule,
    NgIf,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
