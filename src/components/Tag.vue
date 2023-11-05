<script lang="ts" setup>
export interface TagProps {
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple' | 'yellow'
}

defineProps<TagProps>()
</script>

<template>
  <div class="tag" :class="[color]">
    <slot></slot>
  </div>
</template>

<style lang="less">
.tag {
  @apply text-sm px-2 border-(~ current) rounded-full;
  @apply text-gray-6;

  &.blue {
    @apply text-blue-6;
  }

  &.green {
    @apply text-green-6;
  }

  &.red {
    @apply text-red-6;
  }

  &.purple {
    @apply text-purple-6;
  }

  &.yellow {
    @apply text-yellow-6;
  }
}
</style>
