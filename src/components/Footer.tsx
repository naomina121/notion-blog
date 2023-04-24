import React from 'react'
import { siteConfig } from '../../site.config'

const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-6xl bg-white px-4 py-2 text-center'>
      <small className='text-sm'>&copy; {siteConfig.siteTitle}</small>
    </footer>
  )
}

export default Footer
