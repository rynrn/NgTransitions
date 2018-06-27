import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div  appInOutTransition
        *ngFor="let item of items; let i = index;"
        [index]="i"
        inAnimationName="bounceInUp"
        outAnimationName="bounceOutRight"
        [inDuration]="1000"
        [outDuration]="1000"
        class="item"
        (click)="removeItem(item)">{{item.name}}</div>

  <button (click)="addItem()">add item</button>
  `,
  styleUrls: ['./app.component.css', '../../node_modules/animate.css/animate.css']
})
export class AppComponent {
  title = 'app';
  items: any;

  constructor() {
    this.items = [
      {name: 'first'},
      {name: 'secont'}
    ];
  }

  addItem(item: any): void {
    this.items = [...this.items].concat({name: window.prompt('add item')});
  }

  removeItem(item: any): void {
    this.items = this.items.filter(itm => itm !== item);
  }
}
