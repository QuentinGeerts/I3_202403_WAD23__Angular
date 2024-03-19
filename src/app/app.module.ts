import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Exo01Component } from './exos/exo01/exo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { FormsModule } from '@angular/forms';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Exo03Component } from './exos/exo03/exo03.component';
import { Exo04Component } from './exos/exo04/exo04.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Exo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Exo03Component,
    Exo04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Obligatoire pour le ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
