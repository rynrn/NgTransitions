"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.items = [
            { name: 'first' },
            { name: 'secont' },
            { name: 'third' },
            { name: 'fourth' }
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
    AppComponent.prototype.addItem = function () {
        this.items = this.items.slice().concat({ name: window.prompt('add item') });
    };
    AppComponent.prototype.openModal = function () {
        this.showModal = true;
    };
    AppComponent.prototype.closeModal = function () {
        this.showModal = false;
    };
    AppComponent.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (itm) { return itm !== item; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div  [NgTransition]=\"optionsItems\"\n        *ngFor=\"let item of items; let i = index;\"\n        [indexPositionInList]=\"i\"\n        class=\"item\"\n        (click)=\"removeItem(item)\">{{item.name}}</div>\n        <div [NgTransition]=\"optionsModal\"\n            class=\"modal fade show\"\n            *ngIf=\"showModal\"\n            style=\"display: block\"\n            id=\"exampleModal\"\n            tabindex=\"-1\"\n            role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n              <button type=\"button\"\n              (click)=\"closeModal()\"\n              class=\"close\"\n              data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              ...\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\"\n              (click)=\"closeModal()\"\n              class=\"btn btn-secondary\"\n              data-dismiss=\"modal\">Close</button>\n              <button type=\"button\"\n              (click)=\"closeModal()\"\n              class=\"btn btn-primary\">Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n  <button (click)=\"addItem()\">add more item</button>\n  <button (click)=\"openModal()\">open modal</button>\n  ",
            styleUrls: ['./app.component.css', '../../node_modules/animate.css/animate.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
