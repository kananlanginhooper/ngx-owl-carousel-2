import { Component, ViewChild, Input, IterableDiffers, IterableDiffer, DoCheck } from '@angular/core';
import { OwlChild } from './owl-child.component';

@Component({
    selector: 'owl-carousel',
    template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' + '<ng-content></ng-content></owl-carousel-child>',
})

// tslint:disable-next-line:component-class-suffix
export class OwlCarousel implements DoCheck {
    @ViewChild('owl') $owlChild: OwlChild;
    @Input() carouselClasses: any = '';
    @Input() options: any = {};
    private _items: any[];
    private differ: IterableDiffer<any>;

    constructor(private differs: IterableDiffers) {}

    @Input() set items(coll: any[]) {
        this._items = coll;
        if (coll && !this.differ) {
            this.differ = this.differs.find(coll).create(null);
        }
    }

    ngDoCheck() {
        if (this.differ) {
            const changes = this.differ.diff(this._items);
            if (changes) {
                let changed = false;
                let changedFn = () => {
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
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(() => {
            this.$owlChild.destroyOwl();
            if (this.$owlChild.$owl) {
                let itemLength = this._items && this._items.length;
                if (itemLength && itemLength <= this.$owlChild.currentSlideIndex) {
                    this.$owlChild.currentSlideIndex = itemLength;
                }
                this.$owlChild.$owl.css('display', 'block');
            }
            this.$owlChild.initOwl();
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
        this.$owlChild.trigger(action, options);
    }
}
