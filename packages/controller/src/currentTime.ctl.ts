import { BaseControllerFunction } from './base';
import { useInputStore, useMediaStore } from '@npd/store';
import { runInAction } from 'mobx';

export const currentTimeCtl: BaseControllerFunction = (pointer) => {
    const inputStore = useInputStore(pointer);
    const mediaStore = useMediaStore(pointer);

    const onTimeupdate = () =>
        runInAction(() => {
            mediaStore.currentTime = inputStore.media.currentTime;
        });

    inputStore.media.addEventListener('timeupdate', onTimeupdate);
    return () => inputStore.media.removeEventListener('timeupdate', onTimeupdate);
};
