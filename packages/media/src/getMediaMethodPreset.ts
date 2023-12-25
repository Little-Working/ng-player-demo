export type MediaLayerMethodRecord = ReturnType<typeof getMediaMethodPreset>;

export function getMediaMethodPreset(el: HTMLMediaElement) {
    return {
        play: () => el.play(),
        pause: () => el.pause(),
    };
}
