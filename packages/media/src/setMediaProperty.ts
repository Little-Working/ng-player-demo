/**
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
 */
export interface MediaLayerProperty {
    // HTMLMediaElement
    autoplay?: boolean;
    controls?: boolean;
    crossOrigin?: string;
    defaultMuted?: boolean;
    defaultPlaybackRate?: number;
    disableRemotePlayback?: boolean;
    loop?: boolean;
    muted?: boolean;
    playbackRate?: number;
    preload?: 'none' | 'metadata' | 'auto';
    preservesPitch?: boolean;
    volume?: number;

    // HTMLVideoElement
    poster?: string;
    disablePictureInPicture?: boolean;
    width?: number;
    height?: number;
}

export function setMediaProperty(el: HTMLMediaElement, prop?: MediaLayerProperty) {
    if (!prop) return;

    for (const [key, value] of Object.entries(prop)) {
        Reflect.set(el, key, value);
    }
}
