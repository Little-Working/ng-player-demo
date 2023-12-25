import { test, expect, vi, beforeEach } from 'vitest';
import { callDefaultInstall, MediaLayerPresetUtil } from '../callDefaultInstall';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('call fn', () => {
    const preset: MediaLayerPresetUtil = {
        setMediaSource: vi.fn(),
        setMediaProperty: vi.fn(),
        setMediaAttribute: vi.fn(),
        getMediaMethodPreset: vi.fn(),
        getMediaEventPreset: vi.fn(),
    };
    callDefaultInstall(v, preset, { src: '' });
    for (const [key, value] of Object.entries(preset)) {
        expect(value).toHaveBeenCalledOnce();
    }
});
