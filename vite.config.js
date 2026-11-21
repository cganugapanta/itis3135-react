import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/itis3135-react/',
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