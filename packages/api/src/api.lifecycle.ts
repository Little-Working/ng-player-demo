import { RootContextPointer, useInputStore } from '@npd/store';

export function apiLifecycle(pointer: RootContextPointer) {
    const inputStore = useInputStore(pointer);

    return {
        dispose: () => {
            while (inputStore.disposerList.length) {
                const fn = inputStore.disposerList.shift();
                if (typeof fn === 'function') {
                    fn();
                }
            }
        },
    };
}
