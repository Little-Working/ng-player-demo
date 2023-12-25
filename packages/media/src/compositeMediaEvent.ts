import { mediaEventTypeList, MediaLayerEventType } from './getMediaEventPreset';

export type MediaLayerEventEmitter = () => void;
export type MediaLayerEventHandler = (emitter: MediaLayerEventEmitter, mediaEventType: string) => void;
export type MediaLayerEventRecord = {
    [key in MediaLayerEventType]: MediaLayerEventHandler;
};

export function compositeMediaEvent(eventTarget: EventTarget, overrideEvent?: Partial<MediaLayerEventRecord>) {
    if (!overrideEvent) return;

    for (const mediaEventType of mediaEventTypeList) {
        if (Reflect.has(overrideEvent, mediaEventType)) {
            const fn = overrideEvent[mediaEventType];

            if (typeof fn === 'function') {
                fn(() => eventTarget.dispatchEvent(new CustomEvent(mediaEventType)), mediaEventType);
            }
        }
    }
}
