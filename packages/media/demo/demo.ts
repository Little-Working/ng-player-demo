import { createMp4Player } from './player/mp4';
import { createDashjsPlayer } from './player/dashjs';
import { createYoutubePlayer } from './player/youtube';
import { createMp3Player } from './player/mp3';

const root = document.getElementById('root');

// @ts-ignore
const setGlobalPlayer = (id: string, value: unknown) => (window[id + 'Player'] = value);

if (root) {
    const nodes = root.querySelectorAll('div');

    for (const node of nodes) {
        switch (node.id) {
            case 'mp3':
                setGlobalPlayer(node.id, createMp3Player(node));
                break;
            case 'mp4':
                setGlobalPlayer(node.id, createMp4Player(node));
                break;
            case 'dashjs':
                setGlobalPlayer(node.id, createDashjsPlayer(node));
                break;
            case 'youtube':
                setGlobalPlayer(node.id, createYoutubePlayer(node));
                break;
        }
    }
}
