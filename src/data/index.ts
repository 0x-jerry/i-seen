import dataRaw from '../../data/db.json'
import type { SharedItem } from '../../data/type'

export const db: SharedItem[] = dataRaw

const tags = db.reduce((pre, cur) => pre.concat(cur.tags || []), [] as string[])

const tagColors = ['blue', 'gray', 'green', 'red', 'purple', 'yellow'] as const

export const getTagColor = (tag: string) => {
  const idx = tags.indexOf(tag)

  return tagColors[idx % tagColors.length]
}
