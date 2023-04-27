import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import List from '@/components/blogs/List'
import { fetchPages } from '@/utils/notion'

export const getStaticProps: GetStaticProps = async () => {
  // NotionAPIからデータを取得する
  const { results: pages } = await fetchPages()

  return {
    props: {
      pages: pages,
    },
  }
}

// 渡ってくる変数に対して型定義をする
type indexProps = {
  pages: (PageObjectResponse | PartialPageObjectResponse)[]
}

const index: NextPage<indexProps> = ({ pages }) => {
  // 取得したデータの実際の値の確認
  console.log(pages)
  return (
    <Layout>
      <List />
    </Layout>
  )
}

export default index
