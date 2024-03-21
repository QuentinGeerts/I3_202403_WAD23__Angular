import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { Exo07dot1Component } from './exo07dot1/exo07dot1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo01Component } from './exo01/exo01.component';
import { Exo03Component } from './exo03/exo03.component';
import { Exo04Component } from './exo04/exo04.component';
import { Exo07dot2Component } from './exo07dot2/exo07dot2.component';
import { Exo08Component } from './exo08/exo08.component';
import { Exo09Component } from './exo09/exo09.component';
import { Exo11Component } from './exo11/exo11.component';
import { ListArticlesComponent } from './exo11/list-articles/list-articles.component';


@NgModule({
  declarations: [
    ExosComponent,
    Exo01Component,
    Exo03Component,
    Exo04Component,
    Exo07dot1Component,
    Exo07dot2Component,
    Exo08Component,
    Exo09Component,
    Exo11Component,
    ListArticlesComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule,
  ]
})
export class ExosModule { }
