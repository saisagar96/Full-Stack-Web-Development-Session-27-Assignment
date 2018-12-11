import Counter from './Counter';

describe('Counter Test Cases', () => {

    let counter = null;

    beforeEach(() => {
        counter = new Counter();
    });

    it('Initializes with a Zero', () => {
        expect(counter.state.value).toBe(0);
    });

    it('Increments Properly', () => {
        counter.incr();
        counter.incr();
        counter.decr();
        counter.decr();

        expect(counter.state.value).toBe(4);
    });
});