import { useRouter } from 'next/router'
import React from 'react'
import Layout from '@/components/Layout'
import List from '@/components/blogs/List'

const Category = () => {
  const router = useRouter()
  const { category } = router.query

  return (
    <Layout>
      <>
        <h1 className='text-3xl font-bold border-b-2 mb-6 pb-2'>カテゴリ名：「{category}」</h1>
        <List />
      </>
    </Layout>
  )
}

export default Category
