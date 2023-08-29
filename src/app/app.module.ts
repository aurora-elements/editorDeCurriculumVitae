import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { SubPageComponent } from './sub-page/sub-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SubPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
