import { TestBed } from '@angular/core/testing';

import { NgxOwlCarousel2Service } from './ngx-owl-carousel2.service';

describe('NgxOwlCarousel2Service', () => {
    let service: NgxOwlCarousel2Service;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxOwlCarousel2Service);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
