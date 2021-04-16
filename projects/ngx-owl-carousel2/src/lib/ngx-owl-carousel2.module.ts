import { NgModule } from '@angular/core';
import { NgxOwlCarousel2Component } from './ngx-owl-carousel2.component';
import { NgxOwlCarousel2SlideComponent } from './ngx-owl-carousel2-slide.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NgxOwlCarousel2Component, NgxOwlCarousel2SlideComponent],
    imports: [CommonModule],
    exports: [NgxOwlCarousel2Component, NgxOwlCarousel2SlideComponent],
})
export class NgxOwlCarousel2Module {}
