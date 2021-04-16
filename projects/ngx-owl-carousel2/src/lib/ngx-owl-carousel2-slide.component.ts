import { OnDestroy, Component, Input, ElementRef, HostBinding, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;
declare const jQuery: any;
@Component({
    selector: 'lib-ngx-owl-carousel2-slide',
    template: '<ng-content></ng-content>',
})
export class NgxOwlCarousel2SlideComponent implements OnInit, OnDestroy, AfterViewInit {
    @HostBinding('class.owl-carousel') owlClass = true;
    @Input() options: any = {};

    $owl: any;
    currentSlideIndex: number | undefined;

    constructor(private el: ElementRef) {
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }

    ngOnInit() {
        if (typeof window !== 'undefined' && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    }

    ngAfterViewInit() {
        this.initOwl();
    }

    initOwl() {
        if (this.$owl) {
            const options: any = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', (event: any) => {
                this.currentSlideIndex = event.item.index;
            });
        }
    }

    trigger(action: string, options?: any[]) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    }

    ngOnDestroy() {
        this.destroyOwl();
        delete this.$owl;
    }

    destroyOwl() {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded owl-hidden').find('.owl-stage:empty, .owl-item:empty').remove();
        }
    }
}
