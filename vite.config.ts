/// <reference types="vitest/config" />
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: './',
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      VueRouter({
        dts: 'types/typed-router.d.ts',
      }),
      Vue(),

      // https://github.com/unocss/unocss
      Unocss(),
    ],
    test: {
      globals: true,
    },
  }
})
