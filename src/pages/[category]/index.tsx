import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '@/components/Layout'
import List from '@/components/blogs/List'
import { CategoryProps, Params } from '@/types'
import { dammyPages } from '@/utils/dammy'
import { fetchPages } from '@/utils/notion'

export const getStaticProps: GetStaticProps = async (context) => {
  // 受け取ってきたクエリ文字列を型定義する
  const { category } = context.params as Params
  // NotionAPIからデータを取得する
  const { results: pages } = await fetchPages({ category })
  // ダミーデータを渡す。
  //const pages = dammyPages

  // オブジェクトが空だったら404を返す
  if (!pages.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      pages: pages,
      category: category,
    },
  }
}

// 動的URLに対応させる。
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Category: NextPage<CategoryProps> = ({ pages, category }) => {
  return (
    <Layout>
      <>
        <h1 className='mb-6 border-b-2 pb-2 text-3xl font-bold'>カテゴリ名：「{category}」</h1>
        <ul>
          {pages.map((page, index) => {
            return <List key={index} page={page} />
          })}
        </ul>
      </>
    </Layout>
  )
}

export default Category
