import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    base: '/crowd-source-client-v1/',
    plugins: [react()],
    resolve:{
        alias: {
            '@' : resolve(__dirname, './src/')
        }
    }
})
