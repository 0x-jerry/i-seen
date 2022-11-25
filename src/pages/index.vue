<script lang="ts" setup>
import type { CardProps } from '@/components/Card.vue'
import db from '../../data/db.json'

const data: CardProps[] = db
</script>

<template>
  <div class="text-4xl mt-30px ml-50px">I Seen</div>
  <hr class="border-0 border-(t gray-3) mb-4" />
  <div class="px-50px flex flex-wrap gap-4">
    <Card v-for="item in data" v-bind="item"></Card>
  </div>
</template>

<style lang="less"></style>
