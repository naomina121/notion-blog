import React from 'react'

const index = () => {
  return (
    <div className='flex h-full min-h-screen w-full flex-col bg-gray-800'>
      <div className='flex-glow mx-auto h-full w-full max-w-6xl flex-1 bg-white p-16'>
        <header>
          <h1 className='font-sans text-4xl font-bold'>Notion BLOG</h1>
        </header>
        <main className='p-16'>
          <ul>
            <li className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
              <div className='mb-2 text-sm text-gray-500'>
                <time className='mr-4' dateTime='2022-07-07'>
                  2022/7/7
                </time>
                <span>プログラミング</span>
              </div>
              <h2 className='mb-4 font-sans text-2xl font-semibold'>
                <a href='#' className='hover:opacity-80'>初学者が学ぶべき、オブジェクト指向解説</a>
              </h2>
              <p className='mb-4'>
                初学者こそ、オブジェクト指向について、学んだほうがいいと感じてきたのでそれについて語っていこうと思う。
              </p>
              <a href='#' className='bg-lime-600 text-sm text-white text-center p-1 w-full max-w-[120px] block hover:opacity-80'>続きを読む</a>
            </li>
            <li className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
              <div className='mb-2 text-sm text-gray-500'>
                <time className='mr-4' dateTime='2018-07-07'>
                  2018/7/7
                </time>
                <span>機械学習</span>
              </div>
              <h2 className='mb-4 font-sans text-2xl font-semibold'>
                <a href='#' className='hover:opacity-80'>ChatGPTを0から作ったことを記事にまとめてみた</a>
              </h2>
              <p className='mb-4'>
                最近、流行りのChatGPTを自分でも作れないかを検討してみたら意外と簡単にできたので驚いた。今回はそれを記事にしていこうと思う。
              </p>
              <a href='#' className='bg-lime-600 text-sm text-white text-center p-1 w-full max-w-[120px] block hover:opacity-80'>続きを読む</a>
            </li>
            <li className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
              <div className='mb-2 text-sm text-gray-500'>
                <time className='mr-4' dateTime='2023-07-07'>
                  2023/7/7
                </time>
                <span>ネットワーク</span>
              </div>
              <h2 className='mb-4 font-sans text-2xl font-semibold'>
                <a href='#' className='hover:opacity-80'>HTTPSの通信についての流れを図解で解説</a>
              </h2>
              <p className='mb-4'>
                ６歳児の娘が、HTTPS通信について興味を持ち出したので、わかりやすく解説するとしよう。
              </p>
              <a href='#' className='bg-lime-600 text-sm text-white text-center p-1 w-full max-w-[120px] block hover:opacity-80'>続きを読む</a>
            </li>
          </ul>
        </main>
      </div>
      <footer className='py-2 px-4 mx-auto w-full max-w-6xl bg-white text-center'>
        <small className='text-sm'>&copy; Notion BLOG.</small>
      </footer>
    </div>
  )
}

export default index
