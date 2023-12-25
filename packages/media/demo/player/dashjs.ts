import { createMediaLayer } from '../../src/createMediaLayer';
import dashjs from 'dashjs';

export function createDashjsPlayer(el: HTMLElement) {
    const v = document.createElement('video');
    el.append(v);

    return createMediaLayer(v, {
        src: 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd',
        prop: {
            controls: true,
            width: 480,
        },
        onInstall(el, preset, option) {
            const player = dashjs.MediaPlayer().create();

            preset.setMediaProperty(el, option.prop);
            typeof option.src === 'string' && player.initialize(el, option.src);

            return {
                overrideEvent: {
                    ...preset.getMediaEventPreset(el),

                    // Customize pause event
                    pause(emitter) {
                        const handler = () => {
                            console.log('[dashjs]', 'pause event triggered');
                            emitter();
                        };
                        player.on(dashjs.MediaPlayer.events.PLAYBACK_PAUSED, handler);
                    },
                },
                overrideMethod: {
                    ...preset.getMediaMethodPreset(el),

                    __getDashPlayer: () => player,

                    // Customize pause method
                    pause() {
                        console.log('[dashjs]', 'call pause method');
                        player.pause();
                    },
                },
            };
        },
    });
}
