import { test, expect, beforeEach, vi } from 'vitest';
import { createMediaLayer } from '../createMediaLayer';

let v: HTMLMediaElement;

beforeEach(() => {
    v = document.createElement('video');
});

test('call option.onInstall', () => {
    const onInstall = vi.fn().mockReturnValue({ overrideEvent: {}, overrideMethod: {} });
    const option = { src: '', onInstall };
    createMediaLayer(v, option);
    expect(onInstall).toHaveBeenCalledOnce();
});

test('call defaultInstall', () => {
    const defaultInstall = vi.hoisted(() => vi.fn().mockReturnValue({ overrideEvent: {}, overrideMethod: {} }));
    vi.mock('../callDefaultInstall', () => ({ callDefaultInstall: defaultInstall }));
    createMediaLayer(v, { src: '' });
    expect(defaultInstall).toHaveBeenCalledOnce();
});
