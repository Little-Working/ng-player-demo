import type { MediaLayerEventEmitter, MediaLayerEventHandler, MediaLayerEventRecord } from './compositeMediaEvent';

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#events
 */
export const mediaEventTypeList = [
    'abort',
    'canplay',
    'canplaythrough',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'playing',
    'progress',
    'ratechange',
    'resize',
    'seeked',
    'seeking',
    'stalled',
    'suspend',
    'timeupdate',
    'volumechange',
    'waiting',
] as const;

export type MediaLayerEventType = (typeof mediaEventTypeList)[number];

function noopHandler(...args: unknown[]) {}

function createMediaEventHandler(el: HTMLMediaElement | null): MediaLayerEventHandler {
    if (el) {
        return (emitter: MediaLayerEventEmitter, mediaEventType: string) => {
            el.addEventListener(mediaEventType, emitter);
            return () => el.removeEventListener(mediaEventType, emitter);
        };
    } else {
        return noopHandler;
    }
}

export function getMediaEventPreset<T extends MediaLayerEventRecord>(el: HTMLMediaElement | null): T {
    const record: Partial<T> = {};

    for (const mediaEventType of mediaEventTypeList) {
        record[mediaEventType] = createMediaEventHandler(el);
    }

    return record as T;
}
