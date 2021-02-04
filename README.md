# NgTransitions

## Quickstart

`npm i ng-transitions`

### Overview

The ngTransition is a directive that can help you with transitions about *ngIf & *ngFor with CSS animations in angular.
make the life easier to add transitions when you add or remove element from DOM. this development was inspired by react-transition-group.

[Demo](https://ng-transitions-demo.stackblitz.io/)

#### Animations

**IMPORTANT** the directive useing animation name that you need to add, you can use **[animate.css](https://daneden.github.io/animate.css)** or any css animation.

#### Add directive to appication

```
import { NgTransitionsModule } from 'ng-transitions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTransitionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### List of items - transition is done when adding and removing items from list

```
this.options = {
  appendTo: 'app-root',
  enterAnimationName: 'fadeIn',
  leaveAnimationName: 'fadeOut',
  enterDuration: 1000,
  leaveDuration: 1000,
  enterAnimationDelay: 0,
  leaveAnimationDelay: 0
};

<div [NgTransition]="optionsItems"
     *ngFor="let item of items; let i = index;"
     [transitionIndex]="i"></div>
```

#### Single element - transition is done when adding and removing single element

```
this.options = {
  appendTo: 'app-root',
  enterAnimationName: 'fadeIn',
  leaveAnimationName: 'fadeOut',
  enterDuration: 1000,
  leaveDuration: 1000,
  enterAnimationDelay: 0,
  leaveAnimationDelay: 0
};

<div [NgTransition]="optionsItems"
     *ngFor="let item of items; let i = index;"
     [transitionIndex]="i"></div>
```

## License

(The MIT License)

Copyright (c) 2018 Nadav Avisror

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

