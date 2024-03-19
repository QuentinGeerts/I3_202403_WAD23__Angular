import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { DemosComponent } from './demos/demos.component';

// BASE_URL = http://localhost:4200/

const routes: Routes = [

  { path: 'home', component: HomeComponent }, // BASE_URL + 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // BASE_URL + ''

  // BASE_URL + 'demos/'
  {
    path: 'demos', children: [
      { path: '', component: DemosComponent },
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
    ]
  },

  { 
    path: 'admin', 
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) 
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
