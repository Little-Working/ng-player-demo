import { makeAutoObservable } from 'mobx';
import { defineStore } from '../defineStore';
import { RootContextPointer } from '../context';

class MediaStore {
    paused = true;
    currentTime = 0;

    constructor(readonly pointer: RootContextPointer) {
        makeAutoObservable(this);
    }
}

export const useMediaStore = defineStore(MediaStore);
