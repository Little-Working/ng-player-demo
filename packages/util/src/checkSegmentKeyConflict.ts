export function checkSegmentKeyConflict(items: Record<string, unknown>[]) {
    const keyMap = new Map<string, unknown>();
    items.forEach((item) => {
        Object.keys(item).forEach((key) => {
            if (keyMap.has(key)) {
                const cachedItem = keyMap.get(key);
                console.error('[SegmentKeyConflict]', '[key]', key, '[item1]', cachedItem, '[item2]', item);
                throw new Error(`[SegmentKeyConflict] key: ${key}`);
            }
            keyMap.set(key, item);
        });
    });
}
