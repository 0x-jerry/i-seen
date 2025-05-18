import {
  defineConfig,
  presetIcons,
  presetMini,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetDaisyui } from '@0x-jerry/unocss-preset-daisyui'

export default defineConfig({
  presets: [presetMini(), presetIcons(), presetDaisyui()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
