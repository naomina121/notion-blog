import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { siteConfig } from '../../site.config'

const Header = () => {
  const router = useRouter()
  // 現在のパスを取得
  const currentPath = router.pathname === '/'
  // サイトタイトルの表示をトップページか、そうでないかで表示する内容を変更
  const siteTitle = () => {
    if (currentPath) {
      return <h1 className='font-sans text-4xl font-bold'>{siteConfig.siteTitle}</h1>
    } else {
      return (
        <Link href='/'>
          <span className='font-sans text-4xl font-bold'>{siteConfig.siteTitle}</span>
        </Link>
      )
    }
  }

  return <header>{siteTitle()}</header>
}

export default Header
