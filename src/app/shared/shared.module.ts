import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecondsToDHMSPipe } from './pipes/seconds-to-dhms.pipe';
import { AdditionPipe } from './pipes/addition.pipe';
import { ChronoPipe } from './pipes/chrono.pipe';
import { ToCelsiusPipe } from './pipes/to-celsius.pipe';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { FormsModule } from '@angular/forms';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    SecondsToDHMSPipe,
    AdditionPipe,
    ChronoPipe,
    ToCelsiusPipe,
    ToFahrenheitPipe,
    TempConverterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    FormsModule,
    NavbarComponent,
    SecondsToDHMSPipe,
    AdditionPipe,
    ChronoPipe,
    ToCelsiusPipe,
    ToFahrenheitPipe,
    TempConverterPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
