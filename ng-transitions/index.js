"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NgTransitionsDirective = (function () {
    function NgTransitionsDirective(el) {
        this.el = el;
        this.parent = null;
        this.enterAnimationName = null;
        this.leaveAnimationName = null;
        this.enterAnimationDelay = null;
        this.leaveAnimationDelay = null;
        this.enterDuration = null;
        this.leaveDuration = null;
        this.transitionIndex = null;
        this.appendTo = null;
    }
    NgTransitionsDirective.prototype.ngOnInit = function () {
        Object.assign(this, this.NgTransition);
        this.setParent();
        if (this.enterAnimationName) {
            this.el.nativeElement.style.animationName = this.enterAnimationName;
            this.el.nativeElement.style.animationDuration = this.enterDuration + "ms";
            this.el.nativeElement.style.animationDelay = this.enterAnimationDelay + "ms";
            this.el.nativeElement.style.animationPlayState = 'running';
        }
    };
    NgTransitionsDirective.prototype.ngOnDestroy = function () {
        if (!this.el.nativeElement || !this.leaveAnimationName) {
            return;
        }
        var el = this.el.nativeElement.cloneNode(true);
        this.reTouchedToDOMOnDestroy(el);
        el.style.animationName = this.leaveAnimationName;
        el.style.animationDuration = this.leaveDuration + "ms";
        el.style.animationDelay = this.leaveAnimationDelay + "ms";
        el.style.animationPlayState = 'running';
        this.removeFromDom(el);
    };
    NgTransitionsDirective.prototype.reTouchedToDOMOnDestroy = function (el) {
        if (!el || !this.parent) {
            return;
        }
        if (this.transitionIndex !== null) {
            this.parent.insertBefore(el, this.parent.children[this.transitionIndex]);
        }
        else {
            this.parent.appendChild(el);
        }
    };
    NgTransitionsDirective.prototype.removeFromDom = function (el) {
        var _this = this;
        setTimeout(function () {
            if (!_this.parent || !el) {
                return;
            }
            _this.parent.removeChild(el);
        }, this.leaveDuration - 60);
    };
    NgTransitionsDirective.prototype.setParent = function () {
        if (typeof this.appendTo === 'string') {
            this.parent = document.querySelector(this.appendTo);
        }
        else if (this.appendTo instanceof HTMLElement) {
            this.parent = this.appendTo;
        }
        else {
            this.parent = this.el.nativeElement.parentElement;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgTransitionsDirective.prototype, "NgTransition", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NgTransitionsDirective.prototype, "transitionIndex", void 0);
    NgTransitionsDirective = __decorate([
        core_1.Directive({
            selector: '[NgTransition]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NgTransitionsDirective);
    return NgTransitionsDirective;
}());
exports.NgTransitionsDirective = NgTransitionsDirective;
//# sourceMappingURL=index.js.map