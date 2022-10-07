import { pow } from './pow';

describe('pow', () =>{
    it ('should return 1 if n = 0', () => {
        const result = pow(1, 0);
        expect(result).toBe(1);
    })

    it ('should return 0 if n is negative', () => {
        const result = pow(1, -2);
        expect(result).toBe(0);
    })

    it ('should return 8 if x=2, n=3', () => {
        const result = pow(2, 3);
        expect(result).toBe(8);
    })

    it ('should return 9 if x=3, n=2', () => {
        const result = pow(3, 2);
        expect(result).toBe(9);
    })
})