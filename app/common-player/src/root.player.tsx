import { fetchMp4Url } from '@npd/loader';
import { BasePlayerInput, createBasePlayer } from '@npd/base';
import { apiLifecycle, apiMedia } from '@npd/api';
import { useInputStore } from '@npd/store';
import { currentTimeCtl, pausedStateCtl } from '@npd/controller';

export function createPlayer(input: BasePlayerInput) {
    const fetchView = () => import('./root.view').then((module) => module.RootView);
    const { api, pointer } = createBasePlayer(
        input,
        fetchView,
        [apiMedia, apiLifecycle],
        [currentTimeCtl, pausedStateCtl],
    );
    const inputStore = useInputStore(pointer);

    // Demo
    fetchMp4Url().then((srcUrl) => {
        inputStore.media.src = srcUrl;
    });

    return api;
}
