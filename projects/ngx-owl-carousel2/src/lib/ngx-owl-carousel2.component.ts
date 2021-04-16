import { Component, ViewChild, Input, IterableDiffers, IterableDiffer, DoCheck } from '@angular/core';
import { NgxOwlCarousel2SlideComponent } from './ngx-owl-carousel2-slide.component';

@Component({
    selector: 'lib-ngx-owl-carousel2',
    template: '<lib-ngx-owl-carousel2-slide #owl [ngClass]="carouselClasses" [options]="options" ><ng-content></ng-content></lib-ngx-owl-carousel2-slide>',
    styles: [],
})
export class NgxOwlCarousel2Component implements DoCheck {
    @ViewChild('owl') ngxOwlCarousel2SlideComponent: NgxOwlCarousel2SlideComponent;
    @Input() carouselClasses: any = '';
    @Input() options: any = {};
    private privateItems: any[] | undefined;
    private differ: IterableDiffer<any> | undefined;

    constructor(private differs: IterableDiffers) {}

    @Input() set items(coll: any[]) {
        this.privateItems = coll;
        if (coll && !this.differ) {
            this.differ = this.differs.find(coll).create(undefined);
        }
    }

    ngDoCheck() {
        if (this.differ) {
            const changes = this.differ.diff(this.privateItems);
            if (changes) {
                let changed = false;
                const changedFn = () => {
                    changed = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed) {
                    this.reInit();
                }
            }
        }
    }

    reInit() {
        if (this.ngxOwlCarousel2SlideComponent.$owl) {
            this.ngxOwlCarousel2SlideComponent.$owl.css('display', 'none');
        }
        setTimeout(() => {
            this.ngxOwlCarousel2SlideComponent.destroyOwl();
            if (this.ngxOwlCarousel2SlideComponent.$owl) {
                const itemLength = this.privateItems && this.privateItems.length;
                // @ts-ignore
                if (itemLength && itemLength <= this.ngxOwlCarousel2SlideComponent.currentSlideIndex) {
                    this.ngxOwlCarousel2SlideComponent.currentSlideIndex = itemLength;
                }
                this.ngxOwlCarousel2SlideComponent.$owl.css('display', 'block');
            }
            this.ngxOwlCarousel2SlideComponent.initOwl();
        }, 0);
    }

    refresh() {
        this.trigger('refresh.owl.carousel');
    }

    next(options?: any[]) {
        this.trigger('next.owl.carousel', options);
    }

    previous(options?: any[]) {
        this.trigger('prev.owl.carousel', options);
    }

    to(options?: any[]) {
        this.trigger('to.owl.carousel', options);
    }

    trigger(action: string, options?: any[]) {
        this.ngxOwlCarousel2SlideComponent.trigger(action, options);
    }
}
