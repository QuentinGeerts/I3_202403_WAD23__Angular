import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';


@NgModule({
  declarations: [
    ExosComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
