export function parseElementFromString<T extends HTMLElement = HTMLElement>(text: string): T {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text.trim(), 'text/html');
    return document.adoptNode(doc.body.firstChild as ChildNode) as T;
}
