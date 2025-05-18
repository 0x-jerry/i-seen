import {
  defineConfig,
  presetMini,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetDaisyui } from '@0x-jerry/unocss-preset-daisyui'

export default defineConfig({
  presets: [presetMini(), presetDaisyui()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
