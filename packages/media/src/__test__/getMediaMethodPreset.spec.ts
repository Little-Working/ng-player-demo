import { test, expect, beforeEach } from 'vitest';
import { getMediaMethodPreset } from '../getMediaMethodPreset';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('call preset play and pause', () => {
    const preset = getMediaMethodPreset(v);

    preset.play();
    expect(v.paused).toBe(false);

    preset.pause();
    expect(v.paused).toBe(true);
});
