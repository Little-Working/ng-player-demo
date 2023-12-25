import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig((config) => {
    return {
        define: {
            'process.env': {
                NODE_ENV: config.mode,
            },
        },
        build: {
            lib: {
                entry: resolve(__dirname, 'index'),
                name: 'appNamespace',
                fileName: (format, entryName) => `${entryName}.${format}.js`,
            },
        },
        plugins: [react()],
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: '[local]_[hash:base64:8]',
            },
        },
    };
});
