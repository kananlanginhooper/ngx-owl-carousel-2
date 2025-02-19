import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PresentComponent } from './present.component';

describe('PresentComponent', () => {
    let component: PresentComponent;
    let fixture: ComponentFixture<PresentComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PresentComponent],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PresentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
