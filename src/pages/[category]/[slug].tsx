import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React, { FC } from 'react'
import Layout from '@/components/Layout'
import Contents from '@/components/blogs/Contents'
import { ArticleProps, Params } from '@/types'
import { cover, lastUpdatedAt, postCategory, postTitle, publishedAt, tags } from '@/utils/data'
import { fetchBlocksByPageId, fetchPages } from '@/utils/notion'

export const getStaticProps: GetStaticProps = async (context) => {
  // 受け取ってきたクエリ文字列を型定義する
  const { slug } = context.params as Params
  // NotionAPIからデータを取得する(引数は変数名を識別するため)
  const { results: pages } = await fetchPages({ slug: slug })
  const page = pages[0]
  const pageId = page.id
  const { results: blocks } = await fetchBlocksByPageId(pageId)

  // オブジェクトが空だったら404を返す
  if (!pages.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page: page, //ページオブジェクトを受け取る
      blocks: blocks, //記事本文のブロックを受け取る。
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

const Article: FC<ArticleProps> = ({ page, blocks }) => {
  console.log(page)
  return (
    <Layout>
      <div className='flex w-full justify-between'>
        <div className='w-full max-w-2xl'>
          {/* 記事のメタ情報 */}
          <section className='mb-3 flex items-center justify-between'>
            {/* 記事の更新日・作成日・カテゴリー・タグ */}
            <div className='flex text-sm text-gray-500'>
              <span className='mr-2'>作成日</span>
              <time className='mr-4' dateTime={publishedAt(page)} itemProp='datepublished'>
                {publishedAt(page)}
              </time>
              <span className='mr-4'>更新日</span>
              <time className='' dateTime={lastUpdatedAt(page)} itemProp='modified'>
                {lastUpdatedAt(page)}
              </time>
            </div>
            <div className='text-xs'>
              <a href='' className='hover:opacity-80'>
                <span className='mr-1 bg-lime-600 px-2 py-1 text-white'>{postCategory(page)}</span>
              </a>
              {tags(page).map((tag, index) => (
                <a key={index} href={`/tag/${tag}`} className='hover:opacity-80'>
                  <span className='mr-1 bg-gray-200 px-2 py-1'>{tag}</span>
                </a>
              ))}
            </div>
          </section>
          {/* 記事タイトル */}
          <h1 className='text-3xl'>{postTitle(page)}</h1>
          {/* 記事画像 */}
          <Image
            className='my-4 block'
            src={`${cover(page)}`}
            width={1152}
            height={688}
            alt={postTitle(page)}
          />
          {/* 記事本文 */}
          <Contents blocks={blocks} />
          {/* 著作者 */}
          <section className='my-3 flex items-center justify-around border-[1px] border-solid border-gray-300 p-4'>
            <div className='flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gray-300 text-sm text-gray-600'>
              アイコンなど
            </div>
            <div className='text-sm'>
              <h2 className='text-xl'>昼神太陽</h2>
              <div className='my-1'>
                <p className='my-1'>昼起きて、夜寝るという生活を送っているエンジニアです</p>
                <p className='my-1'>趣味は、機械学習を学ぶことが好きです。</p>
              </div>
              <div className='my-1'>
                <p>
                  <span className='font-bold text-gray-700'>
                    GitHub:
                    <a href='' className='text-sky-600'>
                      https://github.com
                    </a>
                  </span>
                </p>
                <p>
                  <span className='font-bold text-gray-700'>
                    Qiita:
                    <a href='' className='ml-2 text-sky-600'>
                      https://qiita.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className='w-full max-w-[200px]'>
          <div className='sticky top-[98px] m-0 mb-14 h-[470px] p-0 shadow'>
            <h3 className='mb-0 bg-lime-600 p-3 text-center text-lg font-normal text-white'>
              この記事の目次
            </h3>
            <div className='mb-1 mt-0 rounded-b-md p-4 text-sm'>
              <ol>
                <li className='mb-1'>
                  <a href=''>H2のタイトルの表示のされ方はこんな感じです。</a>
                  <ol className='my-1'>
                    <li className='my-1'>
                      <a href='' className='mb-4'>
                        小見出しはH3まで活用できます。
                      </a>
                    </li>
                  </ol>
                </li>
                <li className='my-1'>
                  <a href=''>まとめ</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
