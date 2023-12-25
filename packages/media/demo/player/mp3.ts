import { createMediaLayer } from '../../src/createMediaLayer';

export function createMp3Player(el: HTMLElement) {
    const a = document.createElement('audio');
    el.append(a);

    return createMediaLayer(a, {
        src: 'https://1hqcng.bl.files.1drv.com/y4mC87XbRE2oIQuVNfdbOK5PeTWnQlKMnLcFioeDc75WEVxYlujIJmyrL865f9WyRcOuCmlz_9INsKCYXPo09RytWl1pLjHj8Jt316o3GNFG9xlOJn1qzSarN2am-2Ffg4GZe-SSpNWeYS5Kzjv-Xq2ozV3SpAsvhHzVtCbad9Vw-Nf__Gs7zCBFqbwrmxswyap1sLqOV-8UeZc6Zlq50KtSw',
        prop: {
            controls: true,
            crossOrigin: 'anonymous',
        },
    });
}
