import { test, expect, beforeEach, vi } from 'vitest';
import { getMediaEventPreset } from '../getMediaEventPreset';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('el=null', () => {
    const preset = getMediaEventPreset(null);

    for (const [key, value] of Object.entries(preset)) {
        expect(value(function () {}, '')).toBeFalsy();
    }
});

test('el=HTMLVideoElement', () => {
    const preset = getMediaEventPreset(v);
    const emitter = vi.fn();

    preset.play(emitter, 'play');
    v.play()
        .then(() => expect(emitter).toHaveBeenCalledTimes(1))
        .catch(() => expect(emitter).toHaveBeenCalledTimes(0));
});
