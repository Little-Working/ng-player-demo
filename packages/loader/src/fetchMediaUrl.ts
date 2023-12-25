import { MP3_URL, MP4_URL } from '@npd/config';
import { sleep } from '@npd/util';

export async function fetchMp4Url() {
    await sleep(600);
    return MP4_URL;
}

export async function fetchMp3Url() {
    await sleep(600);
    return MP3_URL;
}
