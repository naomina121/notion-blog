import { ParsedUrlQuery } from 'querystring'

// Page
export type PageType = {
  id: string
  cover?: FileType
  properties: PropertyType
}

export type FileType = {
  file?: {
    url: string
    expiry_time: string
  }
  external?: {
    url: string
  }
}

export type PropertyType = {
  title: {
    title: RichTextType[]
  }
  slug: {
    rich_text: RichTextType[]
  }
  description: {
    rich_text: RichTextType[]
  }
  tags: {
    multi_select: [
      {
        name: string
      },
    ]
  }
  category: {
    select: {
      name: string
    }
  }
  isPublished: {
    checkbox: boolean
  }
  publishedAt?: {
    date: {
      start: string
    }
  }
  lastUpdatedAt: {
    last_edited_time: string
  }
}

export type RichTextType = {
  text?: {
    content: string
    link: null | {
      url: string
    }
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: null | string
}

export type IndexProps = {
  pages: PageType[]
}

export type ListProps = {
  page: PageType
  key: number
}

export type CategoryProps = IndexProps & {
  category: string
}

export type ArticleProps = IndexProps & {
  page: PageType
  blocks: Array<any> //ひとまず便宜上anyで定義しておく
}

export type Params = ParsedUrlQuery & {
  category: string
  slug: string
}
