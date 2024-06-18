import Link from 'next/link'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <div>
        <Link href="/sign-in">Login</Link>
      </div>
      <div className='grid grid-cols-5'>
        <div className='col-span-1 flex flex-col gap-[10px]'>
          <Link href="analytics">Analytics</Link>
          <Link href="settings">Setting</Link>
        </div>
        <div className='col-span-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout