import React from 'react'

const List = () => {
  return (
    <ul>
      <li className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
        <div className='mb-2 text-sm text-gray-500'>
          <time className='mr-4' dateTime='2022-07-07'>
            2022/7/7
          </time>
          <span>プログラミング</span>
        </div>
        <h2 className='mb-4 font-sans text-2xl font-semibold'>
          <a href='#' className='hover:opacity-80'>
            初学者が学ぶべき、オブジェクト指向解説
          </a>
        </h2>
        <p className='mb-4'>
          初学者こそ、オブジェクト指向について、学んだほうがいいと感じてきたのでそれについて語っていこうと思う。
        </p>
        <a
          href='#'
          className='block w-full max-w-[120px] bg-lime-600 p-1 text-center text-sm text-white hover:opacity-80'
        >
          続きを読む
        </a>
      </li>
      <li className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
        <div className='mb-2 text-sm text-gray-500'>
          <time className='mr-4' dateTime='2018-07-07'>
            2018/7/7
          </time>
          <span>機械学習</span>
        </div>
        <h2 className='mb-4 font-sans text-2xl font-semibold'>
          <a href='#' className='hover:opacity-80'>
            ChatGPTを0から作ったことを記事にまとめてみた
          </a>
        </h2>
        <p className='mb-4'>
          最近、流行りのChatGPTを自分でも作れないかを検討してみたら意外と簡単にできたので驚いた。今回はそれを記事にしていこうと思う。
        </p>
        <a
          href='#'
          className='block w-full max-w-[120px] bg-lime-600 p-1 text-center text-sm text-white hover:opacity-80'
        >
          続きを読む
        </a>
      </li>
      <li className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
        <div className='mb-2 text-sm text-gray-500'>
          <time className='mr-4' dateTime='2023-07-07'>
            2023/7/7
          </time>
          <span>ネットワーク</span>
        </div>
        <h2 className='mb-4 font-sans text-2xl font-semibold'>
          <a href='#' className='hover:opacity-80'>
            HTTPSの通信についての流れを図解で解説
          </a>
        </h2>
        <p className='mb-4'>
          ６歳児の娘が、HTTPS通信について興味を持ち出したので、わかりやすく解説するとしよう。
        </p>
        <a
          href='#'
          className='block w-full max-w-[120px] bg-lime-600 p-1 text-center text-sm text-white hover:opacity-80'
        >
          続きを読む
        </a>
      </li>
    </ul>
  )
}

export default List
