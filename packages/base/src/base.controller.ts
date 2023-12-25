import type { RootContextPointer } from '@npd/store';
import type { BaseControllerFunction, BaseControllerDisposer } from '@npd/controller';

export function installController(items: BaseControllerFunction[], pointer: RootContextPointer) {
    const disposerList: BaseControllerDisposer[] = [];

    Array.from(new Set(items)).forEach((fn) => {
        const disposer = fn(pointer);
        typeof disposer === 'function' && disposerList.push(disposer);
    });

    return () => disposerList.forEach((disposer) => disposer());
}
