import { test, expect, beforeEach } from 'vitest';
import { setMediaAttribute } from '../setMediaAttribute';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('v.attr=undefined', () => {
    setMediaAttribute(v);
    expect(v.getAttribute('unknown')).toBeFalsy();
});

test('v.attr=object', () => {
    const attr = {
        playsInline: '',
        anythingKey: 'hello',
    };
    setMediaAttribute(v, attr);
    for (const [key, value] of Object.entries(attr)) {
        expect(v.getAttribute(key)).toBe(value);
    }
});
