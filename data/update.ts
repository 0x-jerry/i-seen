import path from 'path'
import fs from 'fs/promises'
import { CardProps } from '../src/components/Card.vue'
import data from './raw.json'
import type { Schema } from './type'
import { wikiSummary } from './wiki'
import { parseArgs } from 'node:util'

const raw: Schema = data

const output = path.join(__dirname, 'db.json')

let dbData: CardProps[] = []

main().catch((err) => {
  console.log(String(err))
})

const { values: args } = parseArgs({
  options: {
    force: {
      type: 'boolean',
      short: 'f',
    },
  },
})

async function main() {
  await loadDB()

  for (const item of raw) {
    const idx = dbData.findIndex((n) => n.title === item.wiki)

    if (!args.force) {
      if (idx >= 0) {
        console.log('ignore:', item.wiki)
        continue
      }
    }

    const summary = await wikiSummary(item.wiki)

    const newItem = {
      title: item.wiki,
      cover: summary.originalimage.source,
      description: summary.extract,
      wikiUrl: summary.content_urls.desktop.page,
    }

    if (idx >= 0) {
      dbData[idx] = newItem
      console.log('update:', item.wiki)
    } else {
      dbData.push(newItem)
      console.log('add:', item.wiki)
    }
  }

  await fs.writeFile(output, JSON.stringify(dbData, null, 2))
}

async function loadDB() {
  try {
    const txt = await fs.readFile(output, { encoding: 'utf-8' })
    dbData = JSON.parse(txt)
  } catch (_err) {
    //
  }
}
