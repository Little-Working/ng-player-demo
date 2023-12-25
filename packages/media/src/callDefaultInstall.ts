import type { AbstractMediaElementSource, setMediaSource } from './setMediaSource';
import type { MediaLayerProperty, setMediaProperty } from './setMediaProperty';
import type { setMediaAttribute } from './setMediaAttribute';
import type { MediaLayerEventRecord } from './compositeMediaEvent';
import type { getMediaEventPreset } from './getMediaEventPreset';
import type { getMediaMethodPreset, MediaLayerMethodRecord } from './getMediaMethodPreset';

export interface MediaLayerPresetUtil {
    setMediaSource: typeof setMediaSource;
    setMediaProperty: typeof setMediaProperty;
    setMediaAttribute: typeof setMediaAttribute;
    getMediaEventPreset: typeof getMediaEventPreset;
    getMediaMethodPreset: typeof getMediaMethodPreset;
}

export interface MediaElementOptionRecord {
    src: AbstractMediaElementSource;
    prop?: MediaLayerProperty;
    attr?: Record<string, unknown>;
}

export interface InstallHookReturnedRecord {
    overrideEvent?: Partial<MediaLayerEventRecord>;
    overrideMethod: MediaLayerMethodRecord;
}

export function callDefaultInstall(
    el: HTMLMediaElement,
    preset: MediaLayerPresetUtil,
    option: MediaElementOptionRecord,
): InstallHookReturnedRecord {
    preset.setMediaProperty(el, option.prop);
    preset.setMediaAttribute(el, option.attr);
    preset.setMediaSource(el, option.src);

    return {
        overrideEvent: preset.getMediaEventPreset(el),
        overrideMethod: preset.getMediaMethodPreset(el),
    };
}
