import { makeAutoObservable } from 'mobx';
import { defineStore } from '../defineStore';
import { RootContextPointer } from '../context';

class InputStore {
    disposerList: (() => void)[] = [];

    video: HTMLVideoElement | null = null;
    audio: HTMLAudioElement | null = null;

    get media(): HTMLMediaElement {
        return (this.video || this.audio) as HTMLMediaElement;
    }

    constructor(readonly pointer: RootContextPointer) {
        makeAutoObservable(this);
    }

    setMediaElement(mediaElement: HTMLMediaElement) {
        if (!mediaElement) {
            throw new Error('Media element is required');
        }
        this.video = mediaElement instanceof HTMLVideoElement ? mediaElement : null;
        this.audio = mediaElement instanceof HTMLAudioElement ? mediaElement : null;
    }
}

export const useInputStore = defineStore(InputStore);
