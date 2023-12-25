export function setMediaAttribute(el: HTMLMediaElement, attr?: Record<string, unknown>) {
    if (!attr) return;

    for (const [key, value] of Object.entries(attr)) {
        if (value != null) {
            el.setAttribute(key, value.toString());
        }
    }
}
