import { CommonModule } from '@angular/common';
import { NgModule, Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

const init = {
  appendTo: 'body',
  enterAnimationName: 'fadeIn',
  leaveAnimationName: 'fadeOut',
  enterDuration: 1000,
  leaveDuration: 1000,
  enterAnimationDelay: 0,
  leaveAnimationDelay: 0
};

export interface ITransitionOptions {
  enterAnimationName?: string;
  leaveAnimationName?: string;
  enterAnimationDelay?: number;
  leaveAnimationDelay?: number;
  enterDuration?: number;
  leaveDuration?: number;
  transitionIndex?: number;
  appendTo?: HTMLElement | string;
}

@Directive({
  selector: '[NgTransition]'
})
export class NgTransitionsDirective implements OnInit, OnDestroy {
  @Input('NgTransition') NgTransition: ITransitionOptions = init;
  @Input('transitionIndex') transitionIndex: number = -1;

  private parent: any;
  private enterAnimationName: string = 'fadeIn';
  private leaveAnimationName: string = 'fadeIn';
  private enterAnimationDelay: number = 1000;
  private leaveAnimationDelay: number = 1000;
  private enterDuration: number = 0;
  private leaveDuration: number = 0;
  private appendTo: any;

  constructor(public el: ElementRef) {
    this.parent = null;
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
    if (this.transitionIndex > -1) {
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

@NgModule({
  imports: [CommonModule],
  declarations: [NgTransitionsDirective],
  exports: [NgTransitionsDirective]
})
export class NgTransitionsModule { }
