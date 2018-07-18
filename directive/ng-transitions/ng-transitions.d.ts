import { ElementRef, OnInit, OnDestroy } from '@angular/core';
export declare class NgTransitionsDirective implements OnInit, OnDestroy {
    el: ElementRef;
    NgTransition: any;
    indexPositionInList: number;
    private parent;
    private enterAnimationName;
    private leavAnimationName;
    private enterAnimationDelay;
    private leavAnimationDelay;
    private enterDuration;
    private leavDuration;
    private appendTo;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private reTouchedToDOMOnDestroy;
    private removeFromDom;
    private setParent;
}
