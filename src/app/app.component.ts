import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div  [NgTransition]="optionsItems"
        *ngFor="let item of items; let i = index;"
        [indexPositionInList]="i"
        class="item"
        (click)="removeItem(item)">{{item.name}}</div>
        <div [NgTransition]="optionsModal"
            class="modal fade show"
            *ngIf="showModal"
            style="display: block"
            id="exampleModal"
            tabindex="-1"
            role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button"
              (click)="closeModal()"
              class="close"
              data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button"
              (click)="closeModal()"
              class="btn btn-secondary"
              data-dismiss="modal">Close</button>
              <button type="button"
              (click)="closeModal()"
              class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  <button (click)="addItem()">add more item</button>
  <button (click)="openModal()">open modal</button>
  `,
  styleUrls: ['./app.component.css', '../../node_modules/animate.css/animate.css']
})
export class AppComponent {
  public title = 'app';
  public items: any;
  public optionsItems: any;
  public optionsModal: any;
  public showModal: boolean;

  constructor() {
    this.items = [
      {name: 'first'},
      {name: 'secont'},
      {name: 'third'},
      {name: 'fourth'}
    ];
    this.optionsItems = {
      appendTo: 'app-root',
      enterAnimationName: 'fadeIn',
      leavAnimationName: 'fadeOut',
      enterDuration: 1000,
      leavDuration: 1000,
      enterAnimationDelay: 0,
      leavAnimationDelay: 0
    };
    this.optionsModal = {
      appendTo: 'app-root',
      enterAnimationName: 'bounceInDown',
      leavAnimationName: 'bounceOutUp',
      enterDuration: 1000,
      leavDuration: 1000,
      enterAnimationDelay: 0,
      leavAnimationDelay: 0
    };
  }

  addItem(item: any): void {
    this.items = [...this.items].concat({name: window.prompt('add item')});
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  removeItem(item: any): void {
    this.items = this.items.filter(itm => itm !== item);
  }
}
