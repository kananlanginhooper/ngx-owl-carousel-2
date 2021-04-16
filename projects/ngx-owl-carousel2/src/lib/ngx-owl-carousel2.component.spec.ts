import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwlCarousel2Component } from './ngx-owl-carousel2.component';

describe('NgxOwlCarousel2Component', () => {
    let component: NgxOwlCarousel2Component;
    let fixture: ComponentFixture<NgxOwlCarousel2Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxOwlCarousel2Component],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxOwlCarousel2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
