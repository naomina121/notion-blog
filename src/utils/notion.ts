// 公式のNotionAPIと接続する
import { Client } from '@notionhq/client'
import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints'

// Notionのシークレットトークンを取得する。
export const notion = new Client({ auth: process.env.NOTION_API_TOKEN as string })

// データ取得用の関数を作成
export const fetchPages = async ({ category, slug }: { category?: string; slug?: string }) => {
  // 条件定義用 初期設定は公開するものだけフィルタリング
  const and: any = [
    {
      property: 'isPublished',
      checkbox: {
        equals: true,
      },
    },
  ]

  // categoryが存在したらそのカテゴリーでフィルタリング
  if (category) {
    and.push({
      property: 'category',
      select: {
        equals: category,
      },
    })
  }

  // slugが存在していたらそのslugでフィルタリング
  if (slug) {
    and.push({
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    })
  }

  // 取得するデータベースのID（＝ページID）を定義する
  const databaseId = process.env.ARTICLE_PAGE_ID as string
  return await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: and,
    },
  })
}

// ページIDからブロックを取得する関数を作成
export const fetchBlocksByPageId = async (pageId: string) => {
  const data = []
  let cursor: string | undefined = undefined
  while (true) {
    const { results, next_cursor }: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    })
    data.push(...results)
    if (!next_cursor) break
    cursor = next_cursor
  }
  return { results: data }
}
