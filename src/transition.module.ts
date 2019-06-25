import { NgModule } from '@angular/core';
import { NgTransitionsDirective } from './transition.directive';

@NgModule({
    exports: [NgTransitionsDirective],
    declarations: [NgTransitionsDirective]
  })
  export class NgTransitionsModule { }