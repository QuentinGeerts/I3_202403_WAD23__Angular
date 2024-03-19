import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExosComponent } from './exos.component';
import { Exo01Component } from './exo01/exo01.component';
import { Exo03Component } from './exo03/exo03.component';
import { Exo04Component } from './exo04/exo04.component';

const routes: Routes = [

  { path: '', component: ExosComponent }, 
  { path: 'exo01', component: Exo01Component },
  { path: 'exo03', component: Exo03Component },
  { path: 'exo04', component: Exo04Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
