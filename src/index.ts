import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

export interface ITransitionOptions {
  enterAnimationName: string;
  leaveAnimationName: string;
  enterAnimationDelay: number;
  leaveAnimationDelay: number;
  enterDuration: number;
  leaveDuration: number;
  transitionIndex?: number;
  appendTo?: HTMLElement | string;
}

@Directive({
  selector: '[NgTransition]'
})
export class NgTransitionsDirective implements OnInit, OnDestroy {
    @Input() NgTransition: ITransitionOptions;
    @Input() transitionIndex: number;

    private parent: any;
    private enterAnimationName: string;
    private leaveAnimationName: string;
    private enterAnimationDelay: number;
    private leaveAnimationDelay: number;
    private enterDuration: number;
    private leaveDuration: number;
    private appendTo: any;

    constructor(public el: ElementRef) {
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

     ngOnInit(): void {
      (<any>Object).assign(this, this.NgTransition);
      this.setParent();

      if (this.enterAnimationName) {
        this.el.nativeElement.style.animationName = this.enterAnimationName;
        this.el.nativeElement.style.animationDuration = `${this.enterDuration}ms`;
        this.el.nativeElement.style.animationDelay = `${this.enterAnimationDelay}ms`;
        this.el.nativeElement.style.animationPlayState = 'running';
      }
     }

     ngOnDestroy(): void {
        if (!this.el.nativeElement || !this.leaveAnimationName) {
          return;
        }
        const el = this.el.nativeElement.cloneNode(true);
        this.reTouchedToDOMOnDestroy(el);

        el.style.animationName = this.leaveAnimationName;
        el.style.animationDuration = `${this.leaveDuration}ms`;
        el.style.animationDelay = `${this.leaveAnimationDelay}ms`;
        el.style.animationPlayState = 'running';

        this.removeFromDom(el);
    }

    private reTouchedToDOMOnDestroy(el: HTMLElement): void {
      if (!el || !this.parent) {
        return;
      }
      if (this.transitionIndex !== null) {
        this.parent.insertBefore(el, this.parent.children[this.transitionIndex]);
      } else {
        this.parent.appendChild(el);
      }
    }

    private removeFromDom(el: HTMLElement): void {
      setTimeout(() => {
        if (!this.parent || !el) {
          return;
        }
        this.parent.removeChild(el);
      }, this.leaveDuration - 60);
    }

    private setParent(): void {
      if (typeof this.appendTo === 'string') {
        this.parent = document.querySelector(this.appendTo);
      } else if (this.appendTo instanceof HTMLElement) {
        this.parent = this.appendTo;
      } else {
        this.parent = this.el.nativeElement.parentElement;
      }
    }
}
