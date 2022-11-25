interface SharedItem {
  /**
   * wiki title
   */
  wiki: string
  tags?: string[]
}

export type Schema = SharedItem[]
