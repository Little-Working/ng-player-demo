import { parseElementFromString } from '@npd/util';

export interface BaseTemplateNodes {
    container: HTMLElement;
    mediaArea: HTMLElement; // Native (Optimized for performance)
    addonArea: HTMLElement; // Framework (React, Vue, ...)
}

export function createBaseTemplate(): BaseTemplateNodes {
    // language=HTML
    const html: string = `<div class="npd-container"><div class="npd-media-area"></div><div class="npd-addon-area"></div></div>`;

    const root = parseElementFromString(html);

    return {
        container: root,
        mediaArea: root.querySelector('.npd-media-area'),
        addonArea: root.querySelector('.npd-addon-area'),
    } as BaseTemplateNodes;
}
