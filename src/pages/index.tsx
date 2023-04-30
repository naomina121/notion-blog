import { GetStaticProps, NextPage } from 'next'
import Layout from '@/components/Layout'
import List from '@/components/blogs/List'
import { IndexProps } from '@/types'
import { dammyPages } from '@/utils/dammy'
import { fetchPages } from '@/utils/notion'

export const getStaticProps: GetStaticProps = async () => {
  // NotionAPIからデータを取得する
  const { results: pages } = await fetchPages({})
  // ダミーデータを渡す。
  //const pages = dammyPages

  return {
    props: {
      pages: pages,
    },
  }
}

const index: NextPage<IndexProps> = ({ pages }) => {
  return (
    <Layout>
      <ul>
        {pages.map((page, index) => {
          return <List key={index} page={page} />
        })}
      </ul>
    </Layout>
  )
}

export default index
