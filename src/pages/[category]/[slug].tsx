import React from 'react'
import Layout from '@/components/Layout'

const Article = () => {
  return (
    <Layout>
      <div className='flex w-full justify-between'>
        <div className='w-full max-w-2xl'>
          {/* 記事のメタ情報 */}
          <section className='mb-3 flex items-center justify-between'>
            {/* 記事の更新日・作成日・カテゴリー・タグ */}
            <div className='flex text-sm text-gray-500'>
              <span className='mr-2'>作成日</span>
              <time className='mr-4' dateTime='2022-07-07' itemProp='datepublished'>
                2022/7/7
              </time>
              <span className='mr-4'>更新日</span>
              <time className='' dateTime='2022-07-07' itemProp='modified'>
                2023/9/9
              </time>
            </div>
            <div className='text-xs'>
              <a href='' className='hover:opacity-80'>
                <span className='mr-1 bg-lime-600 px-2 py-1 text-white'>プログラミング</span>
              </a>
              <a href='' className='hover:opacity-80'>
                <span className='mr-1 bg-gray-200 px-2 py-1'>オブジェクト指向</span>
              </a>
              <a href='' className='hover:opacity-80'>
                <span className='mr-1 bg-gray-200 px-2 py-1'>初学者</span>
              </a>
            </div>
          </section>
          {/* 記事タイトル */}
          <h1 className='text-3xl'>初学者が学ぶべき、オブジェクト指向解説</h1>
          {/* 記事画像 */}

          <div className='my-4 flex h-[360px] w-full items-center justify-center bg-gray-200'>
            <p className='text-2xl text-gray-600'>ここにアイキャッチ画像が入る予定です。</p>
            <img src='' alt='' />
          </div>
          {/* 記事本文 */}
          <section className='text-gray-800'>
            <p className='my-6'>冒頭の文章などはこのように表示されます。</p>
            <p className='my-6'>ここに何かしらの説明を入れても良いでしょう。</p>
            <h2 className='my-6 bg-sky-100 p-3 text-2xl text-gray-700'>
              H2のタイトルの表示のされ方はこんな感じです。
            </h2>
            <p className='my-6'>記事本文の装飾を付け加えることも可能です。</p>
            <p className='my-6'>
              例えば、
              <a href='' className='text-blue-600 hover:opacity-80'>
                リンク
              </a>
              はこのように表示されます。
            </p>
            <p className='my-6'>
              その設定に関しては後ほどご説明します。今回は、最低限のタグのデザインのみを設定しています。
            </p>
            <h3 className='my-6 border-b-2 border-solid py-3 text-xl text-gray-600'>
              小見出しはH3まで活用できます。
            </h3>
            <p className='my-6'>リストタグは下記のようになります。</p>
            <ul className='list-disc'>
              <li className='mb-2 ml-4'>リスト一覧です。</li>
              <li className='mb-2 ml-4'> リスト一覧です。</li>
              <li className='mb-2 ml-4'>リスト一覧です。</li>
            </ul>
            <p className='my-6'>番号付きのリストも使用できます</p>
            <ol className='list-decimal'>
              <li className='mb-2 ml-7'>リスト一覧です。</li>
              <li className='mb-2 ml-7'> リスト一覧です。</li>
              <li className='mb-2 ml-7'>リスト一覧です。</li>
            </ol>
            <h2 className='my-6 bg-sky-100 p-3 text-2xl text-gray-700'>まとめ</h2>
            <p className='my-6'>TailWindCSSがとても便利なことはご理解いただけたでしょうか？</p>
            <p className='my-6'>
              このスタイルに関してはご自由にカスタマイズしてみるのもありだと思います
            </p>
            <p className='my-6'>ぜひ、皆様もTailWindCSSをご活用してみてくださいね！</p>
          </section>
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
