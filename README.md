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
