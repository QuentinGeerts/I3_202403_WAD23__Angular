import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecondsToDHMSPipe } from './pipes/seconds-to-dhms.pipe';
import { AdditionPipe } from './pipes/addition.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    SecondsToDHMSPipe,
    AdditionPipe
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavbarComponent,
    SecondsToDHMSPipe,
    AdditionPipe,
  ]
})
export class SharedModule { }
