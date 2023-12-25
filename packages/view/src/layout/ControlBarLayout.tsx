import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import styles from './ControlBarLayout.module.css';

export const ControlBarLayout = observer(({ children }: { children: ReactNode }) => {
    return <div className={styles.controlBar}>{children}</div>;
});
