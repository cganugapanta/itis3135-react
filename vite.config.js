import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        {
            name: 'move-validator-scripts',
            transformIndexHtml(html) {
                const llama = '<script src="https://divonbriesen.github.io/teaching/tools/standards-check.js" defer></script>';
                const accumulus = '<script src="https://lint.page/kit/4d0fe3.js" defer></script>';

                html = html.replace(llama, '');
                html = html.replace(accumulus, '');

                return html.replace(
                    '</head>',
                    `${llama}\n${accumulus}\n</head>`
                );
            }
        }
    ],
    base: './',
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'scripts/[name]-[hash].js',
                chunkFileNames: 'scripts/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return 'styles/default.css';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        }
    }
})