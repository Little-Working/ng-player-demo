import { RootContextPointer } from '@npd/store';

export type BaseControllerDisposer = () => void;
export type BaseControllerFunction = (pointer: RootContextPointer) => BaseControllerDisposer | void;
