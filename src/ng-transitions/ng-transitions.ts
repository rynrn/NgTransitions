import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[NgTransition]'
})
export class NgTransitionsDirective implements OnInit, OnDestroy {
    @Input() NgTransition: any;
    @Input() indexPositionInList: number;

    private parent: any;
    private enterAnimationName: string;
    private leavAnimationName: string;
    private enterAnimationDelay: number;
    private leavAnimationDelay: number;
    private enterDuration: number;
    private leavDuration: number;
    private appendTo: any;

    constructor(public el: ElementRef) {
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
        if (!this.el.nativeElement || !this.leavAnimationName) {
          return;
        }
        const el = this.el.nativeElement.cloneNode(true);
        this.reTouchedToDOMOnDestroy(el);

        el.style.animationName = this.leavAnimationName;
        el.style.animationDuration = `${this.leavDuration}ms`;
        el.style.animationDelay = `${this.leavAnimationDelay}ms`;
        el.style.animationPlayState = 'running';

        this.removeFromDom(el);
    }

    private reTouchedToDOMOnDestroy(el: HTMLElement): void {
      if (!el || !this.parent) {
        return;
      }
      if (this.indexPositionInList !== null) {
        this.parent.insertBefore(el, this.parent.children[this.indexPositionInList]);
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
      }, this.leavDuration - 60);
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
