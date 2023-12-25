import { createMediaLayer } from '../../src/createMediaLayer';

export function createMp4Player(el: HTMLElement) {
    const v = document.createElement('video');
    el.append(v);

    return createMediaLayer(v, {
        src: 'https://x9niew.bl.files.1drv.com/y4mAZmJ2PZ4PiMxNwI2gEShwTB-9zkGHdIcZYLbcGU4NxuDk1T2oejzLmkxG1dwVE5rviqY3jQbvpNp1YpfWpv63ErknOZAEO-Up_wIF4JgZdwtyYJ9hkCY6JomDDwjmtuuPqlHh_nvcxG7Qx60MhjZCaOqkPrENP3Fab3eZIVbuemfGRx6vDE38aO18mxxs7mJI8ExH82rubOo77iY1ZUYwQ',
        prop: {
            controls: true,
            width: 480,
            crossOrigin: 'anonymous',
        },
        attr: {
            playsInline: '',
        },
    });
}
