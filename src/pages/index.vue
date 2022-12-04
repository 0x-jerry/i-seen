<script lang="ts" setup>
import { db } from '@/data'
</script>

<template>
  <div class="text-4xl mt-30px ml-50px">I Seen</div>
  <hr class="border-0 border-(t gray-3) mb-4" />
  <div class="px-50px flex flex-wrap gap-8">
    <Card v-for="item in db" v-bind="item" />
  </div>
</template>

<style lang="less"></style>
