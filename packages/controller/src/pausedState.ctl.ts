import { BaseControllerFunction } from './base';
import { useInputStore, useMediaStore } from '@npd/store';
import { runInAction } from 'mobx';

export const pausedStateCtl: BaseControllerFunction = (pointer) => {
    const inputStore = useInputStore(pointer);
    const mediaStore = useMediaStore(pointer);

    const onPlay = () =>
        runInAction(() => {
            mediaStore.paused = false;
        });

    const onPause = () =>
        runInAction(() => {
            mediaStore.paused = true;
        });

    inputStore.media.addEventListener('play', onPlay);
    inputStore.media.addEventListener('pause', onPause);

    return () => {
        inputStore.media.removeEventListener('play', onPlay);
        inputStore.media.removeEventListener('pause', onPause);
    };
};
