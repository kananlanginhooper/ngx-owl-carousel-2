import { ErrorHandler, ReflectiveInjector } from '@angular/core';
import { OwlLogger } from './logger.service';

describe('logger service', () => {
    let logSpy: jasmine.Spy;
    let warnSpy: jasmine.Spy;
    let logger: OwlLogger;
    let errorHandler: ErrorHandler;

    beforeEach(() => {
        logSpy = spyOn(console, 'log');
        warnSpy = spyOn(console, 'warn');
        const injector = ReflectiveInjector.resolveAndCreate([OwlLogger, { provide: ErrorHandler, useClass: MockErrorHandler }]);
        logger = injector.get(OwlLogger);
        errorHandler = injector.get(ErrorHandler);
    });

    describe('log', () => {
        it('should delegate to console.log', () => {
            logger.log('param1', 'param2', 'param3');
            expect(logSpy).toHaveBeenCalledWith('param1', 'param2', 'param3');
        });
    });

    describe('warn', () => {
        it('should delegate to console.warn', () => {
            logger.warn('param1', 'param2', 'param3');
            expect(warnSpy).toHaveBeenCalledWith('param1', 'param2', 'param3');
        });
    });

    describe('error', () => {
        it('should delegate to ErrorHandler', () => {
            const err = new Error('some error message');
            logger.error(err);
            expect(errorHandler.handleError).toHaveBeenCalledWith(err);
        });
    });
});

class MockErrorHandler implements ErrorHandler {
    handleError = jasmine.createSpy('handleError');
}
