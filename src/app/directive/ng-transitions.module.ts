import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTransitionsDirective } from './ng-transitions';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ NgTransitionsDirective ],
  exports: [ NgTransitionsDirective ]
})
export class NgTransitionsModule { }
