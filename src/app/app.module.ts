import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { SharedModule } from './shared/shared.module';
import { DemosComponent } from './demos/demos.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { ChildInputComponent } from './demos/demo11/child-input/child-input.component';
import { ChildOutputComponent } from './demos/demo11/child-output/child-output.component';
import { ChildNgcontentComponent } from './demos/demo11/child-ngcontent/child-ngcontent.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    DemosComponent,
    Demo06Component,
    Demo07Component,
    Demo08Component,
    Demo09Component,
    Demo10Component,
    Demo11Component,
    ChildInputComponent,
    ChildOutputComponent,
    ChildNgcontentComponent,
    Demo12Component,
    Demo13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Obligatoire pour le ngModel
    SharedModule,
    ReactiveFormsModule, // Important pour le fonctionnement du FormGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
