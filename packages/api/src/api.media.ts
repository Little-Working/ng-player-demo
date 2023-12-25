import { RootContextPointer, useInputStore } from '@npd/store';

export function apiMedia(pointer: RootContextPointer) {
    const inputStore = useInputStore(pointer);

    return {
        play: () => inputStore.media.play(),
        pause: () => inputStore.media.pause(),
    };
}
