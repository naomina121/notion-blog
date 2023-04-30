import React, { FC } from 'react'
import { ListProps } from '@/types'
import { postCategory, description, postTitle, publishedAt, slug } from '@/utils/data'

const List: FC<ListProps> = ({ page, key }) => {
  return (
    <li key={key} className='mb-8 border-b-[1px] border-dotted border-gray-300 pb-4'>
      <div className='mb-2 text-sm text-gray-500'>
        <time className='mr-4' dateTime={publishedAt(page)} itemProp='datepublished'>
          {publishedAt(page)}
        </time>
        <span>
          <a href={postCategory(page)}>{postCategory(page)}</a>
        </span>
      </div>
      <h2 className='mb-4 font-sans text-2xl font-semibold'>
        <a href={`/${postCategory(page)}/${slug(page)}`} className='hover:opacity-80'>
          {postTitle(page)}
        </a>
      </h2>
      <p className='mb-4'>{description(page)}</p>
      <a
        href={`/${postCategory(page)}/${slug(page)}`}
        className='block w-full max-w-[120px] bg-lime-600 p-1 text-center text-sm text-white hover:opacity-80'
      >
        続きを読む
      </a>
    </li>
  )
}

export default List
