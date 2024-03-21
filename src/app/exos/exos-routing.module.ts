import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExosComponent } from './exos.component';
import { Exo01Component } from './exo01/exo01.component';
import { Exo03Component } from './exo03/exo03.component';
import { Exo04Component } from './exo04/exo04.component';
import { Exo07dot1Component } from './exo07dot1/exo07dot1.component';
import { Exo07dot2Component } from './exo07dot2/exo07dot2.component';
import { Exo08Component } from './exo08/exo08.component';
import { Exo09Component } from './exo09/exo09.component';

const routes: Routes = [

  { path: '', component: ExosComponent }, 
  { path: 'exo01', component: Exo01Component },
  { path: 'exo03', component: Exo03Component },
  { path: 'exo04', component: Exo04Component },
  { path: 'exo07dot1', component: Exo07dot1Component },
  { path: 'exo07dot2', component: Exo07dot2Component },
  { path: 'exo08', component: Exo08Component },
  { path: 'exo09', component: Exo09Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
