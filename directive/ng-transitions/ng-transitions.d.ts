import { ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class NgTransitionsDirective implements OnInit, OnDestroy {
    el: ElementRef;
    NgTransition: any;
    transitionIndex: number;
    private parent;
    private enterAnimationName;
    private leaveAnimationName;
    private enterAnimationDelay;
    private leaveAnimationDelay;
    private enterDuration;
    private leaveDuration;
    private appendTo;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private reTouchedToDOMOnDestroy;
    private removeFromDom;
    private setParent;
}
