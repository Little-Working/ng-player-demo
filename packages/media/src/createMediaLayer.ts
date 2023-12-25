import { compositeMediaEvent } from './compositeMediaEvent';
import {
    callDefaultInstall,
    InstallHookReturnedRecord,
    MediaElementOptionRecord,
    MediaLayerPresetUtil,
} from './callDefaultInstall';
import { compositeMediaMethod } from './compositeMediaMethod';
import { getMediaEventPreset } from './getMediaEventPreset';
import { getMediaMethodPreset } from './getMediaMethodPreset';
import { setMediaSource } from './setMediaSource';
import { setMediaProperty } from './setMediaProperty';
import { setMediaAttribute } from './setMediaAttribute';

interface MediaLayerHookRecord<T> {
    onInstall?: (
        abstractMedia: T,
        preset: MediaLayerPresetUtil,
        option: MediaElementOptionRecord,
    ) => InstallHookReturnedRecord;
}

class MediaLayer extends EventTarget {}

export function createMediaLayer<U = HTMLMediaElement | object>(
    abstractMedia: U,
    option: MediaElementOptionRecord & MediaLayerHookRecord<U>,
) {
    const preset: MediaLayerPresetUtil = {
        setMediaSource,
        setMediaProperty,
        setMediaAttribute,
        getMediaMethodPreset,
        getMediaEventPreset,
    };
    const mediaLayer = new MediaLayer();
    const returnedRecord =
        typeof option.onInstall === 'function'
            ? option.onInstall(abstractMedia, preset, option)
            : callDefaultInstall(abstractMedia as HTMLMediaElement, preset, option);

    compositeMediaEvent(mediaLayer, returnedRecord.overrideEvent);

    return Object.assign(mediaLayer, compositeMediaMethod(returnedRecord.overrideMethod), {
        on: mediaLayer.addEventListener.bind(mediaLayer),
        off: mediaLayer.removeEventListener.bind(mediaLayer),
    });
}
