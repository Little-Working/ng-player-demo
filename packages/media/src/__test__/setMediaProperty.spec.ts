import { test, expect, beforeEach } from 'vitest';
import { setMediaProperty, MediaLayerProperty } from '../setMediaProperty';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('v.prop=undefined', () => {
    setMediaProperty(v);
    expect(v.autoplay).toBeFalsy();
});

test('v.prop=object', () => {
    const prop: MediaLayerProperty = {
        autoplay: true,
        controls: true,
        crossOrigin: 'anonymous',
        defaultMuted: true,
        defaultPlaybackRate: 2,
        disableRemotePlayback: true,
        loop: true,
        muted: true,
        playbackRate: 1.5,
        preload: 'metadata',
        preservesPitch: true,
        volume: 0.2,
    };
    setMediaProperty(v, prop);
    for (const [key, value] of Object.entries(prop)) {
        expect(Reflect.get(v, key)).toBe(value);
    }
});
