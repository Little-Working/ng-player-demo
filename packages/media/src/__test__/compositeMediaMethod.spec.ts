import { test, expect } from 'vitest';
import { compositeMediaMethod } from '../compositeMediaMethod';
import { MediaLayerMethodRecord } from '../getMediaMethodPreset';

test('overrideMethod={}', () => {
    const overrideMethod = {} as unknown as MediaLayerMethodRecord;
    const method = compositeMediaMethod(overrideMethod);
    expect(method).toBe(overrideMethod);
});
