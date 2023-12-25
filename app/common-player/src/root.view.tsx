import { PausedBtn, ControlBarLayout } from '@npd/view';

/**
 * Create app structure
 */
export function RootView() {
    return (
        <>
            <ControlBarLayout>
                <PausedBtn />
            </ControlBarLayout>
        </>
    );
}
