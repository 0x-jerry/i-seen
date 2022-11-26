interface SharedItem {
  title: string
  cover: string
  description: string
  tags?: string[]
  links?: {
    douban?: string
  }
}

export type Schema = SharedItem[]
