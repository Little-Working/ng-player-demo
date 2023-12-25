import { IconPause } from './icon/IconPause';
import { IconPlay } from './icon/IconPlay';

export function ComPausedBtn({ paused }: { paused: boolean }) {
    if (paused) {
        return <IconPlay />;
    } else {
        return <IconPause />;
    }
}
