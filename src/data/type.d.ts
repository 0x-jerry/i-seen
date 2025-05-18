export interface SharedItem {
  title: string
  cover: string
  description: string
  tags?: string[]
  detail?: boolean
  links?: {
    [key: string]: string | undefined

    douban?: string
    baike?: string
  }
}

export type Schema = SharedItem[]
