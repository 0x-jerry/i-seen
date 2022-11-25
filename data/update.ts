import path from 'path'
import fs from 'fs/promises'
import { CardProps } from '../src/components/Card.vue'
import data from './raw.json'
import type { Schema } from './type'
import { wikiSummary } from './wiki'

const raw: Schema = data

const output = path.join(__dirname, 'db.json')

let dbData: CardProps[] = []

main().catch((err) => {
  console.log(String(err))
})

async function main() {
  await loadDB()

  for (const item of raw) {
    const hit = dbData.find((n) => n.title === item.wiki)
    if (hit) {
      console.log('ignore:', item.wiki)
      continue
    }

    const summary = await wikiSummary(item.wiki)

    dbData.push({
      title: item.wiki,
      cover: summary.originalimage.source,
      description: summary.extract,
      wikiUrl: summary.content_urls.desktop.page,
    })

    console.log('add:', item.wiki)
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
