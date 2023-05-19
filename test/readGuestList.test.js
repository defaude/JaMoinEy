import { describe, expect, it } from 'vitest';
import { readGuestList } from '../src/readGuestList.js';

describe('readGuestList', () => {
    it('should read a guest list definition file', () => {
        const { guests, buddies, rivals } = readGuestList(new URL('example.txt', import.meta.url));

        expect(guests).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
        expect(buddies).toEqual([
            ['A', 'C', 'D'],
            ['A', 'E'],
        ]);
        expect(rivals).toEqual([
            ['B', 'F'],
            ['C', 'E', 'F'],
        ]);
    });
});
