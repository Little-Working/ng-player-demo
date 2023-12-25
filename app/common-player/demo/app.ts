import { createPlayer } from '..';

const container = document.getElementById('root');

if (container) {
    const player = createPlayer({ container });

    console.log('player created and can be accessed via window.player');

    // @ts-ignore
    window.player = player;
} else {
    console.error('container not found');
}
