/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attributes
 */
export interface MediaLayerSourceRecord {
    type: string;
    src: string;
    media?: string;
}

export type AbstractMediaElementSource = MediaLayerSourceRecord[] | string;

export function setMediaSource(el: HTMLMediaElement, src?: AbstractMediaElementSource) {
    if (!src) return;

    if (typeof src === 'string') {
        el.src = src;
        return;
    }

    if (Array.isArray(src)) {
        for (const item of src) {
            const sourceElement = document.createElement('source');
            sourceElement.src = item.src;
            sourceElement.type = item.type;
            if (item.media) {
                sourceElement.media = item.media;
            }
            el.appendChild(sourceElement);
        }
        return;
    }
}
