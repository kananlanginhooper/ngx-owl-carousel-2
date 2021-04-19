import { OwlOptions } from '../models/owl-options.model';

/**
 * Defaults value of options
 */
export class OwlCarouselOConfig implements OwlOptions {
    items = 3;
    skip_validateItems = false;
    loop = false;
    center = false;
    rewind = false;

    mouseDrag = true;
    touchDrag = true;
    pullDrag = true;
    freeDrag = false;

    margin = 0;
    stagePadding = 0;

    merge = false;
    mergeFit = true;
    autoWidth = false;

    startPosition = 0;
    rtl = false;

    smartSpeed = 250;
    fluidSpeed = false;
    dragEndSpeed = false;

    responsive = {};
    responsiveRefreshRate = 200;

    // defaults to Navigation
    nav = false;
    navText = ['prev', 'next'];
    navSpeed = false;
    slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
    dots = true;
    dotsEach = false;
    dotsData = false;
    dotsSpeed = false;

    // defaults to Autoplay
    autoplay = false;
    autoplayTimeout = 5000;
    autoplayHoverPause = false;
    autoplaySpeed = false;
    autoplayMouseleaveTimeout = 1;

    // defaults to LazyLoading
    lazyLoad = false;
    lazyLoadEager = 0;

    // defaults to Animate
    slideTransition = '';
    animateOut = false;
    animateIn = false;

    // defaults to AutoHeight
    autoHeight = false;

    // defaults to Hash
    URLhashListener = false;
    constructor() {}
}

/**
 * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
 * class below is copy of OwlOptions but its all props have string value showing certain type;
 * this is class is being used just in method _validateOptions() of CarouselService;
 */
export class OwlOptionsMockedTypes {
    items = 'number';
    skip_validateItems = 'boolean';
    loop = 'boolean';
    center = 'boolean';
    rewind = 'boolean';

    mouseDrag = 'boolean';
    touchDrag = 'boolean';
    pullDrag = 'boolean';
    freeDrag = 'boolean';

    margin = 'number';
    stagePadding = 'number';

    merge = 'boolean';
    mergeFit = 'boolean';
    autoWidth = 'boolean';

    startPosition = 'number|string';
    rtl = 'boolean';

    smartSpeed = 'number';
    fluidSpeed = 'boolean';
    dragEndSpeed = 'number|boolean';

    responsive = {};
    responsiveRefreshRate = 'number';

    // defaults to Navigation
    nav = 'boolean';
    navText = 'string[]';
    navSpeed = 'number|boolean';
    slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
    dots = 'boolean';
    dotsEach = 'number|boolean';
    dotsData = 'boolean';
    dotsSpeed = 'number|boolean';

    // defaults to Autoplay
    autoplay = 'boolean';
    autoplayTimeout = 'number';
    autoplayHoverPause = 'boolean';
    autoplaySpeed = 'number|boolean';
    autoplayMouseleaveTimeout = 'number';

    // defaults to LazyLoading
    lazyLoad = 'boolean';
    lazyLoadEager = 'number';

    // defaults to Animate
    slideTransition = 'string';
    animateOut = 'string|boolean';
    animateIn = 'string|boolean';

    // defaults to AutoHeight
    autoHeight = 'boolean';

    // defaults to Hash
    URLhashListener = 'boolean';
    constructor() {}
}
