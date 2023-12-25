import { test, expect, beforeEach } from 'vitest';
import { setMediaSource } from '../setMediaSource';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('v.src=undefined', () => {
    setMediaSource(v);
    expect(v.src).toBeFalsy();
});

test('v.src=url', () => {
    const url = 'https://www.example.com/file.mp4';
    setMediaSource(v, url);
    expect(v.src).toBe(url);
});

test('v.src=[item]', () => {
    const list = [
        {
            type: 'mp4',
            src: 'https://www.example.com/file.mp4',
        },
        {
            type: 'mp3',
            src: 'https://www.example.com/file.mp3',
            media: '(min-width: 600px)',
        },
    ];
    setMediaSource(v, list);
    expect(v.src).toBeFalsy();
    expect(v.querySelectorAll('source').length).toBe(list.length);
});
