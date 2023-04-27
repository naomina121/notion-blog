// 公式のNotionAPIと接続する
import { Client } from '@notionhq/client'

// Notionのシークレットトークンを取得する。
export const notion = new Client({ auth: process.env.NOTION_API_TOKEN as string })

// データ取得用の関数を作成
export const fetchPages = async () => {
  //取得するデータベースのID（＝ページID）を定義する
  const databaseId = process.env.ARTICLE_PAGE_ID as string
  return await notion.databases.query({
    database_id: databaseId,
  })
}
