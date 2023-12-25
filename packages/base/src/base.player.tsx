import type { ReactElement } from 'react';
import { createPlayerProxy, SegmentMakerList } from './base.api';
import { createBaseTemplate } from './base.template';
import { useInputStore } from '@npd/store';
import { BaseControllerFunction } from '@npd/controller';
import { installController } from './base.controller';

export interface BasePlayerInput {
    container: HTMLElement;
    mediaElement?: HTMLMediaElement;
}

// Temporary
function createDefaultVideoElement(): HTMLVideoElement {
    const v = document.createElement('video');
    v.controls = true;
    v.crossOrigin = 'anonymous';
    v.width = 480;
    return v;
}

export function createBasePlayer<T extends BasePlayerInput, U extends SegmentMakerList>(
    input: T,
    fetchElement: () => Promise<() => ReactElement>,
    apiSegmentList?: U,
    controllerList?: BaseControllerFunction[],
) {
    const nodes = createBaseTemplate();
    const mediaElement = input.mediaElement || createDefaultVideoElement();
    const pointer = new Map<unknown, unknown>();
    const inputStore = useInputStore(pointer);

    inputStore.setMediaElement(mediaElement);

    const disposeController = installController(controllerList || [], pointer);
    const api = createPlayerProxy(apiSegmentList || [], pointer);

    // Optimized for performance
    const fetchElementPromise = fetchElement();
    const rootPromise = import('./base.render').then(async ({ renderBaseView }) => {
        return renderBaseView(nodes.addonArea, pointer, await fetchElementPromise);
    });

    nodes.mediaArea.append(mediaElement);
    input.container.append(nodes.container);

    inputStore.disposerList.push(() => {
        rootPromise.then((root) => root.unmount());
        nodes.container.remove();
        disposeController();
        mediaElement.src = '';
    });

    return { api, pointer };
}
