import got from 'got'
import createHttpsProxyAgent from 'https-proxy-agent'

export interface Summary {
  type?: string
  title?: string
  displaytitle?: string
  namespace?: Namespace
  wikibase_item?: string
  titles?: Titles
  pageid?: number
  thumbnail?: Originalimage
  originalimage?: Originalimage
  lang?: string
  dir?: string
  revision?: string
  tid?: string
  timestamp?: Date
  description?: string
  description_source?: string
  content_urls?: ContentUrls
  extract?: string
  extract_html?: string
}

export interface ContentUrls {
  desktop?: Desktop
  mobile?: Desktop
}

export interface Desktop {
  page?: string
  revisions?: string
  edit?: string
  talk?: string
}

export interface Namespace {
  id?: number
  text?: string
}

export interface Originalimage {
  source?: string
  width?: number
  height?: number
}

export interface Titles {
  canonical?: string
  normalized?: string
  display?: string
}

const proxy = process.env.HTTP_PROXY
const agent = proxy ? createHttpsProxyAgent(process.env.HTTPS_PROXY) : undefined

export async function wikiSummary(title: string, opt: {} = {}) {
  const url = 'https://zh.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title)

  const resp = await got(url, {
    agent: {
      https: agent,
    },
    headers: {
      'Accept-Language': 'zh-hans',
    },
  })

  return JSON.parse(resp.body) as Summary
}
