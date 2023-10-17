import { describe, it, expect, test } from 'vitest'
import Add from '../src/index';


describe('Add function', () => {
    it('Should return the resault of the two parameters added together', () => {
        expect(Add(1,1)).toEqual(2);
    });
});
