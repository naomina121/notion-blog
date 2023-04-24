import React from 'react'
import { siteConfig } from '../../site.config'

const Header = () => {
  return (
    <header>
      <h1 className='font-sans text-4xl font-bold'>{siteConfig.siteTitle}</h1>
    </header>
  )
}

export default Header
