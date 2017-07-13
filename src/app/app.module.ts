import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import {ProfileModule} from "./profile/profile.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    ProfileModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
