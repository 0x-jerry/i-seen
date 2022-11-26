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
  @apply text-gray-5 opacity-70;

  &.blue {
    @apply text-blue-5;
  }

  &.green {
    @apply text-green-5;
  }

  &.red {
    @apply text-red-5;
  }

  &.purple {
    @apply text-purple-5;
  }

  &.yellow {
    @apply text-yellow-5;
  }
}
</style>
