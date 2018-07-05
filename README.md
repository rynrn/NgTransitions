# NgTransitions

## Quickstart
`npm i --save ng-transitions`

### Overview
The ngTransition is a directive that can help you with transitions and animations in angular 2,4,5,6.
make the life easier to add transitions when you add or remove element from DOM. this development was inspired by react-transition-group.

#### Animations
**IMPORTANT** the directive useing animation name that you need to add, you can use **[animate.css](https://daneden.github.io/animate.css)** or any css animation.

#### List of items - transition is done when adding and removing items from list
```
this.options = {
  appendTo: 'app-root',
  enterAnimationName: 'fadeIn',
  leavAnimationName: 'fadeOut',
  enterDuration: 1000,
  leavDuration: 1000,
  enterAnimationDelay: 0,
  leavAnimationDelay: 0
};

<div [NgTransition]="optionsItems"
     *ngFor="let item of items; let i = index;"
     [indexPositionInList]="i"></div>
```

#### Single element - transition is done when adding and removing single element
```
this.options = {
  appendTo: 'app-root',
  enterAnimationName: 'fadeIn',
  leavAnimationName: 'fadeOut',
  enterDuration: 1000,
  leavDuration: 1000,
  enterAnimationDelay: 0,
  leavAnimationDelay: 0
};

<div [NgTransition]="optionsItems"
     *ngFor="let item of items; let i = index;"
     [indexPositionInList]="i"></div>
```

#### Demo
1. `git clone https://github.com/rynrn/NgTransitions.git`
2. `cd NgTransitions`
3. `npm start`
4. Navigate to http://localhost:4200
