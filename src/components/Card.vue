<script lang="ts" setup>
import { getTagColor } from '@/data'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import Tag from './Tag.vue'
import { nextZIndex } from './utils'

export interface CardProps {
  title: string
  cover: string
  description: string
  tags?: string[]
  links?: {
    douban?: string
  }
}

const props = defineProps<CardProps>()

const zIndex = ref(nextZIndex.value)

function next() {
  zIndex.value = nextZIndex.value++
}

const el = ref<HTMLElement>()
const rootEl = ref<HTMLElement>()
const isReverse = ref(false)

onMounted(() => {
  const el = rootEl.value
  if (!el) return

  const x = el.offsetLeft + 900
  isReverse.value = x > window.innerWidth
})

const mouse = useMouseInElement(el, {
  type: 'client',
  handleOutside: false,
})

const pos = computed(() => {
  const { isOutside, elementHeight, elementWidth, elementX, elementY } = mouse

  let xx = 0.5
  let yy = 0.5

  if (!isOutside.value) {
    xx = elementX.value / elementWidth.value
    yy = elementY.value / elementHeight.value
  }

  const y = yy - 0.5
  const x = xx - 0.5

  return {
    x,
    y,
  }
})

const overlayStyle = computed(() => {
  const range = 20
  const { x, y } = pos.value

  return {
    ry: `${-x * range}deg`,
    rx: `${y * range}deg`,
  }
})

const coverStyle = computed(() => {
  const range = 10
  const { x, y } = pos.value

  return {
    backgroundImage: `url(${props.cover})`,
    backgroundPosition: `calc(50% + ${x * range}px) calc(50% + ${y * range}px)`,
  }
})
</script>

<template>
  <div class="card relative" :class="{ 'is-reverse': isReverse }" :style="{ zIndex }" ref="rootEl">
    <div class="content">
      <div class="cover"></div>
      <div class="short-description mt-4">
        <div class="title truncate" :title="title">{{ title }}</div>
      </div>
    </div>

    <div class="overlay-wrapper">
      <div class="overlay" @mouseenter="next()" ref="el">
        <div class="cover" :style="coverStyle" />
        <div class="intro h-400px flex-(~ 1 col) w-0 py-6">
          <div class="title text-2xl px-4 font-bold">
            {{ title }}
          </div>
          <div class="tags flex gap-2 px-4 mt-1 opacity-90" v-if="tags?.length">
            <Tag class="text-xs" v-for="item in tags" :color="getTagColor(item)">{{ item }}</Tag>
          </div>
          <OverlayScrollbarsComponent
            class="description mt-4 flex-1 h-0 px-4 text-gray-6"
            :options="{ scrollbars: { autoHide: 'move' } }"
          >
            {{ description }}
          </OverlayScrollbarsComponent>
          <div class="px-4 flex gap-4">
            <a
              class="w-24px h-24px rounded-full border-(~ solid current) flex items-center justify-center cursor-pointer text-green-5 hover:text-green-6"
              :href="links?.douban"
              target="_blank"
            >
              <i-mdi-douban />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@cover-width: 300px;

.card {
  width: @cover-width * 0.8;

  &.is-reverse {
    .overlay-wrapper {
      left: unset;
      right: 0;

      .overlay {
        left: unset;
        right: 0;

        .cover {
          left: unset;
          right: 0;
        }

        .intro {
          left: 0;
          right: unset;
        }
      }
    }
  }
}

.overlay-wrapper {
  transform: perspective(2000px);
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover {
  width: @cover-width * 0.8;
  height: @cover-width * (4/3) * 0.8;
}

.overlay {
  width: @cover-width * 0.8;
  height: @cover-width * (4/3) * 0.8;

  position: absolute;
  overflow: hidden;
  border-radius: 20px;
  @apply transition duration-400;
  transition-property: width, height, box-shadow, border, top;

  box-shadow: 0 4px 10px rgba(121, 121, 121, 0.154);
  left: 0;
  top: 0;
  background: white;
  border: 1px solid;
  @apply border-gray-2;

  .cover,
  .intro {
    position: absolute;
    top: 0;
    @apply transition duration-400;
    transition-property: width, height, box-shadow, border;
  }

  .cover {
    object-fit: cover;
    z-index: 1;
    height: 100%;
    user-select: none;
    background-color: aliceblue;
    background-repeat: no-repeat;
    background-size: calc(100% + 10px) calc(100% + 10px);
  }

  .intro {
    right: 0;
    width: 500px;
    z-index: 0;
  }

  &:hover {
    box-shadow: 0 4px 40px rgba(121, 121, 121, 0.154);
    width: @cover-width + 500px;
    height: @cover-width * (4/3);

    @apply border-blue;
    top: -40px;
    transform: rotateY(v-bind('overlayStyle.ry')) rotateX(v-bind('overlayStyle.rx'));

    .cover {
      width: @cover-width;
    }

    .intro {
      // height: 400px * 1;
    }
  }
}
</style>
