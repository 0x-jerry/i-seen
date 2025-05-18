<script lang="ts" setup>
import { db } from '@/data'
</script>

<template>
  <div class="text-4xl mt-4 ml-50px mb-3">I Seen</div>
  <hr class="border-0 border-(0 t solid gray-3) mb-4" />
  <div class="px-50px flex flex-wrap gap-8 justify-between">
    <Card v-for="item in db" v-bind="item" />
    <div class="w-240px h-1px" v-for="_ in 8"></div>
  </div>
</template>
