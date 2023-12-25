import { createMediaLayer } from '../../src/createMediaLayer';

// https://developers.google.com/youtube/iframe_api_reference?hl=zh-cn
export function createYoutubePlayer(el: HTMLElement) {
    const global = window as any;

    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];

    firstScriptTag.parentNode && firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player: any;
    global.onYouTubeIframeAPIReady = () => {
        player = new global.YT.Player('youtube', {
            height: 270,
            width: 480,
            videoId: 'vIR0Z5BoI2M',
            playerVars: {
                origin: location.origin,
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
    };

    // The API will call this function when the video player is ready.
    function onPlayerReady(event: any) {
        // event.target.playVideo();
    }

    // The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    let done = false;

    let playEmitter: () => void;
    let pauseEmitter: () => void;

    function onPlayerStateChange(event: any) {
        if (event.data == global.YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
        switch (event.data) {
            case global.YT.PlayerState.PLAYING:
                playEmitter && playEmitter();
                break;
            case global.YT.PlayerState.PAUSED:
                pauseEmitter && pauseEmitter();
                break;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }

    return createMediaLayer(null, {
        src: '',
        onInstall(el, preset, option) {
            return {
                overrideEvent: {
                    ...preset.getMediaEventPreset(el),
                    play(emitter) {
                        playEmitter = () => {
                            console.log('[youtube]', 'play event triggered');
                            emitter();
                        };
                    },
                    pause(emitter) {
                        pauseEmitter = () => {
                            console.log('[youtube]', 'pause event triggered');
                            emitter();
                        };
                    },
                },
                overrideMethod: {
                    __getYouTubePlayer: () => player,
                    async play() {
                        console.log('[youtube]', 'call play method');
                        await player.playVideo();
                    },
                    pause() {
                        console.log('[youtube]', 'call pause method');
                        player.pauseVideo();
                    },
                },
            };
        },
    });
}
