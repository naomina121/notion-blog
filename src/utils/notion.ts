// 公式のNotionAPIと接続する
import { Client } from '@notionhq/client'

// Notionのシークレットトークンを取得する。
export const notion = new Client({ auth: process.env.NOTION_API_TOKEN as string })

// データ取得用の関数を作成
export const fetchPages = async ({ category }: { category?: string }) => {
  //条件定義用 初期設定は公開するものだけフィルタリング
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

  //取得するデータベースのID（＝ページID）を定義する
  const databaseId = process.env.ARTICLE_PAGE_ID as string
  return await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: and,
    },
  })
}
