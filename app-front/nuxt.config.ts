import {defineNuxtConfig} from 'nuxt'
import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
    vite: {
        plugins: [
            federation({
                name: 'module-name',
                filename: 'remoteEntry.js',
                exposes: {
                },
                remotes:{
                    navbar: 'http://localhost:5001/assets/remoteEntry.js',
                },
                shared: ['vue']
            })
        ],
        build: {
            target: 'esnext',
            minify: false,
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    format: 'system',
                    entryFileNames: 'assets/[name].js',
                    minifyInternalExports: false
                }
            }
        }
    }
})
