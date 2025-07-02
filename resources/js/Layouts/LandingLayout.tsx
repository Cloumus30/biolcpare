import { LayoutProps } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react'

type Props = {}

const LandingLayout: React.FC<LayoutProps> = ({children, title}) => {
  return (
    <>
      <Head title={title}></Head>
      <div>
        <main className='content'>
          {children}
        </main>
      </div>
    </>
  )
}

export default LandingLayout;