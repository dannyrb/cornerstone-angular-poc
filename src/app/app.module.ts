import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CornerstoneComponent } from './cornerstone/cornerstone.component';


@NgModule({
  declarations: [
    AppComponent,
    CornerstoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
