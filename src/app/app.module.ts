import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InOutTransitionDirective } from './directive/in-out-transition';

@NgModule({
  declarations: [
    AppComponent,
    InOutTransitionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
