"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NgTransitionsDirective = /** @class */ (function () {
    function NgTransitionsDirective(el) {
        this.el = el;
        this.parent = null;
        this.enterAnimationName = null;
        this.leavAnimationName = null;
        this.enterAnimationDelay = null;
        this.leavAnimationDelay = null;
        this.enterDuration = null;
        this.leavDuration = null;
        this.indexPositionInList = null;
        this.appendTo = null;
    }
    NgTransitionsDirective.prototype.ngOnInit = function () {
        Object.assign(this, this.NgTransition);
        this.setParent();
        this.parent = this.el.nativeElement.parentElement;
        if (this.enterAnimationName) {
            this.el.nativeElement.style.animationName = this.enterAnimationName;
        }
        this.el.nativeElement.style.animationDuration = this.enterDuration + "ms";
        this.el.nativeElement.style.animationDelay = this.enterAnimationDelay + "ms";
        this.el.nativeElement.style.animationPlayState = 'running';
    };
    NgTransitionsDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement.cloneNode(true);
        this.reTouchedToDOMOnDestroy(el);
        if (this.leavAnimationName) {
            el.style.animationName = this.leavAnimationName;
        }
        el.style.animationDuration = this.leavDuration + "ms";
        el.style.animationDelay = this.leavAnimationDelay + "ms";
        el.style.animationPlayState = 'running';
        this.removeFromDom(el);
    };
    NgTransitionsDirective.prototype.reTouchedToDOMOnDestroy = function (el) {
        if (this.indexPositionInList !== null) {
            this.parent.insertBefore(el, this.parent.children[this.indexPositionInList]);
        }
        else {
            this.parent.appendChild(el);
        }
    };
    NgTransitionsDirective.prototype.removeFromDom = function (el) {
        var _this = this;
        setTimeout(function () {
            _this.parent.removeChild(el);
        }, this.leavDuration - 60);
    };
    NgTransitionsDirective.prototype.setParent = function () {
        if (typeof this.appendTo === 'string') {
            this.parent = document.querySelector(this.appendTo);
        }
        else if (this.appendTo instanceof HTMLElement) {
            this.parent = this.appendTo;
        }
        else {
            this.parent = document.body;
        }
    };
    __decorate([
        core_1.Input()
    ], NgTransitionsDirective.prototype, "NgTransition");
    __decorate([
        core_1.Input()
    ], NgTransitionsDirective.prototype, "indexPositionInList");
    NgTransitionsDirective = __decorate([
        core_1.Directive({
            selector: '[NgTransition]'
        })
    ], NgTransitionsDirective);
    return NgTransitionsDirective;
}());
exports.NgTransitionsDirective = NgTransitionsDirective;
