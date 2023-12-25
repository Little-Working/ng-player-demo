import { test, expect, vi } from 'vitest';
import { compositeMediaEvent } from '../compositeMediaEvent';

test('composite play and pause', () => {
    const play = vi.fn();
    const pause = vi.fn();
    compositeMediaEvent(new EventTarget(), { play, pause });
    expect(play).toHaveBeenCalledOnce();
    expect(pause).toHaveBeenCalledOnce();
});
