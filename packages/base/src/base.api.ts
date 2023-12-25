import type { UnionToIntersection } from 'type-fest';
import { checkSegmentKeyConflict } from '@npd/util';
import { RootContextPointer } from '@npd/store';

export type SegmentMaker = (contextValue: RootContextPointer) => Record<string, (...args: unknown[]) => unknown>;
export type SegmentMakerList = SegmentMaker[];

export function createPlayerProxy<T extends SegmentMakerList, U = UnionToIntersection<ReturnType<T[number]>>>(
    apiSegmentMakerList: T,
    pointer: RootContextPointer,
): U {
    const apiSegmentMakerUniqueList = Array.from(new Set(apiSegmentMakerList));
    const apiSegmentObjectList = apiSegmentMakerUniqueList.map((fn) => fn(pointer));
    const api: U = Object.assign(
        {
            /* U */
        },
        ...apiSegmentObjectList,
    );

    checkSegmentKeyConflict(apiSegmentObjectList);

    return api;
}
