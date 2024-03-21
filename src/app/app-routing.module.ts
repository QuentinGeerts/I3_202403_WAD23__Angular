import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { DemosComponent } from './demos/demos.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { Demo13Component } from './demos/demo13/demo13.component';

// BASE_URL = http://localhost:4200/

const routes: Routes = [

  { path: 'home', component: HomeComponent, title: "Acceuil" }, // BASE_URL + 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // BASE_URL + ''

  // BASE_URL + 'demos/'
  {
    path: 'demos', children: [
      { path: '', component: DemosComponent, title: 'Démonstrations' },
      { path: 'demo01', component: Demo01Component, title: 'Démonstration 01 - L\'interpolation de chaines' },
      { path: 'demo02', component: Demo02Component, title: 'Démonstration 02 - Two-way binding (ngModel)' },
      { path: 'demo03', component: Demo03Component, title: 'Démonstration 03 - Event binding' },
      { path: 'demo04', component: Demo04Component, title: 'Démonstration 04 - Attribute binding' },
      { path: 'demo06', component: Demo06Component, title: 'Démonstration 06 - Les Pipes' },
      { path: 'demo07', component: Demo07Component, title: 'Démonstration 07 - Les custom Pipes' },
      { path: 'demo08', component: Demo08Component, title: 'Démonstration 08 - Les directives de composants' },
      { path: 'demo09', component: Demo09Component, title: 'Démonstration 09 - Les directives structurelles' },
      { path: 'demo10', component: Demo10Component, title: 'Démonstration 10 - Les custom directives' },
      { path: 'demo11', component: Demo11Component, title: 'Démonstration 11 - Les Inputs / Outputs' },
      { path: 'demo12', component: Demo12Component, title: 'Démonstration 12 - Les services et injection de dépendances' },
      { path: 'demo13', component: Demo13Component, title: 'Démonstration 13 - Les formulaires' },
    ]
  },

  {
    path: 'exos',
    loadChildren: () => import('./exos/exos.module').then(m => m.ExosModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },

  { path: '**', component: NotFoundComponent, title: "Page non trouvée" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
