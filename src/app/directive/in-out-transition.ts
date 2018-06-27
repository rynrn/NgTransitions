import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appInOutTransition]'
})
export class InOutTransitionDirective implements OnInit, OnDestroy {
    @Input() index: number;
    @Input() inAnimationName: string;
    @Input() outAnimationName: string;
    @Input() inAnimationDelay: number;
    @Input() outAnimationDelay: number;
    @Input() inDuration: number;
    @Input() outDuration: number;

    private parent:  HTMLElement;
    constructor(public el: ElementRef) {
      this.inAnimationName = 'fadeIn';
      this.outAnimationName = 'fadeOut';
      this.inAnimationDelay = 0;
      this.outAnimationDelay = 0;
      this.inDuration = 500;
      this.outDuration = 500;
    }

     ngOnInit(): void {
       this.parent = this.el.nativeElement.parentElement;
        if (this.inAnimationName) {
            this.el.nativeElement.style.animationName = this.inAnimationName;
        }
        this.el.nativeElement.style.animationDuration = `${this.inDuration}ms`;
        this.el.nativeElement.style.animationDelay = `${this.inAnimationDelay}ms`;
        this.el.nativeElement.style.animationPlayState = 'running';
     }

     ngOnDestroy(): void {
        this.appendChild();

        if (this.outAnimationName) {
            this.el.nativeElement.style.animationName = this.outAnimationName;
        }

        this.el.nativeElement.style.animationDuration = `${this.outDuration}ms`;
        this.el.nativeElement.style.animationDelay = `${this.outAnimationDelay}ms`;
        this.el.nativeElement.style.animationPlayState = 'running';

        this.removeFromDom();
    }

    private appendChild(): void {
      if (this.parent.children.length === 0) {
        this.parent.appendChild(this.el.nativeElement);
      } else {
        this.parent.insertBefore(this.el.nativeElement, this.parent.children[this.index]);
      }
    }

    private removeFromDom(): void {
      setTimeout(() => {
        this.parent.removeChild(this.el.nativeElement);
      }, this.outDuration - 60);
    }
}
