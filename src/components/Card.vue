<script lang="ts" setup>
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

export interface CardProps {
  title: string
  cover: string
  description: string
  wikiUrl: string
}

defineProps<CardProps>()
</script>

<template>
  <div class="card flex aspect-16/9 w-600px overflow-hidden shadow-xl rounded">
    <div class="cover h-full block aspect-3/4 overflow-hidden">
      <img
        class="h-full object-cover transition duration-1000 transform hover:(scale-110)"
        :src="cover"
      />
    </div>
    <div class="flex-(~ 1 col) w-0 py-2">
      <div class="title text-lg px-4">
        <a :href="wikiUrl" target="_blank">
          {{ title }}
        </a>
      </div>
      <OverlayScrollbarsComponent
        class="description mt-2 flex-1 px-4"
        :options="{ scrollbars: { autoHide: 'move' } }"
      >
        {{ description }}
      </OverlayScrollbarsComponent>
    </div>
  </div>
</template>

<style lang="less"></style>
