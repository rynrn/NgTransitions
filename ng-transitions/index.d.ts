import { ElementRef, OnInit, OnDestroy } from '@angular/core';
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
export declare class NgTransitionsDirective implements OnInit, OnDestroy {
    el: ElementRef;
    NgTransition: ITransitionOptions;
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
