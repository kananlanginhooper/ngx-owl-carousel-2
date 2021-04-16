import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwlCarousel2SlideComponent } from './ngx-owl-carousel2-slide.component';

describe('NgxOwlCarousel2Component', () => {
    let component: NgxOwlCarousel2SlideComponent;
    let fixture: ComponentFixture<NgxOwlCarousel2SlideComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgxOwlCarousel2SlideComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxOwlCarousel2SlideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
