<script lang='ts' setup>

const timelineConfig = [
  {
    date: '公元 525 年',
    title: '三真法门 创立',
    content: '姜明子 创立三真法门',
  },
  {
    date: '公元 1854 年',
    title: '三真法门 遇难',
    content: '',
  },
  {
    date: '公元 1906 年',
    title: '高皓光',
    content: '三真法门 217 代门主 马朝 收徒 高皓光',
  },
  {
    date: '公元 2020 年',
    title: '段星炼',
    content: '三真法门 221 代门主 周六晴 的师弟 段星炼',
  },
]
</script>

<template>
  <div class="text-4xl mt-4 ml-50px mb-3 flex items-center gap-1">
    <button class="btn btn-link text-4xl" @click="$router.push('/')">
      <span class="i-mdi:arrow-u-left-top"></span>
    </button>
    <span>
      日月同错
    </span>
  </div>
  <hr class="border-0 border-(0 t solid gray-3) mb-4" />
  <div class="px-50px">
    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li v-for="(item, idx) in timelineConfig">
        <div class="timeline-middle">
          <span class="i-mdi:circle inline-flex"></span>
        </div>
        <div class="mb-10" :class="[
          idx % 2 === 0 ? 'timeline-start' : 'timeline-end',
          idx % 2 === 0 ? ' md:text-end' : 'md:text-start',
        ]">
          <time class="font-mono italic">{{ item.date }}</time>
          <div class="text-lg font-black">{{ item.title }}</div>
          <div class="content">
            {{ item.content }}
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<style lang='scss'></style>
