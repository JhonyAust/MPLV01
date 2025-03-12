import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    base: '/', // Ensures correct base path for deployment
    plugins: [react()],
    build: {
        outDir: 'dist', // Default output folder for Vite
    }
});