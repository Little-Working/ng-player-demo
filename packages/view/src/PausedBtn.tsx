import { ComPausedBtn } from '@npd/component';
import { observer } from 'mobx-react-lite';
import { useInputStore, useMediaStore } from '@npd/store';
import styles from './PausedBtn.module.css';

export const PausedBtn = observer(() => {
    const mediaStore = useMediaStore();
    const inputStore = useInputStore();
    const togglePaused = () => {
        if (inputStore.media.paused) {
            inputStore.media.play();
        } else {
            inputStore.media.pause();
        }
    };

    return (
        <span className={styles.iconSize} onClick={togglePaused}>
            <ComPausedBtn paused={mediaStore.paused} />
        </span>
    );
});
