<script lang='ts' setup>
export interface IconTagProps {
  icon: string
  color?: string
}

defineProps<IconTagProps>()
</script>

<template>
  <div :class="['icon-tag', color]">
    <slot>
      <span :class="icon"></span>
    </slot>
  </div>
</template>

<style lang='scss'>
.icon-tag {
  @apply size-26px rounded-full border-(1 solid current) flex items-center justify-center;
  font-size: 20px;

  &.green {
    @apply text-green-5 hover:text-green-6;
  }

  &.blue {
    @apply text-blue-5 hover:text-blue-6;
  }

  &.red {
    @apply text-red-5 hover:text-red-6;
  }
}
</style>
