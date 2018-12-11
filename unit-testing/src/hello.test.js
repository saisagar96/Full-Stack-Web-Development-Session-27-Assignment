function add(a=0, b=0) {
    return(a + b);
}

describe('First Test Suite', () => {
    it('Adds two numbers properly', () => {
        expect(add(10,20)).toBe(30);
    });

    it('Gives zero while calling with no args', () => {
        expect(add()).toBe(0);
    });
});



