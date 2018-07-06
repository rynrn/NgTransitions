import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgTransitionsDirective } from '../directive/ng-transitions';

@NgModule({
  declarations: [
    AppComponent,
    NgTransitionsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
