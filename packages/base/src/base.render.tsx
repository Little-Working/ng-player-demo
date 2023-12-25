import { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { RootContext, RootContextPointer } from '@npd/store';

export async function renderBaseView(
    container: HTMLElement,
    pointer: RootContextPointer,
    TransparentReactElement: () => ReactElement,
) {
    const root = createRoot(container);

    root.render(
        <RootContext.Provider value={pointer}>
            <TransparentReactElement />
        </RootContext.Provider>,
    );

    return root;
}
