/// <reference types="vitest/config" />
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

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
      Vue(),

      // https://github.com/antfu/unplugin-icons
      Icons({}),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: 'types/components.d.ts',
        resolvers: [IconsResolver()],
        types: [],
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        exclude: ['**/components/*.vue', '**/*.ts'],
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        dts: 'types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', '@vueuse/core'],
      }),

      // https://github.com/unocss/unocss
      Unocss(),
    ],
    test: {
      globals: true,
    },
  }
})
