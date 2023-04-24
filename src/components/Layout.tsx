import React, { ReactElement } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = Required<{
  readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex h-full min-h-screen w-full flex-col bg-gray-800'>
      <div className='flex-glow mx-auto h-full w-full max-w-6xl flex-1 bg-white p-16'>
        <Header />
        <main className='p-16'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
