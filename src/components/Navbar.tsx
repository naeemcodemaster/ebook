import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='container flex items-center justify-between py-3 border-b border-gray-300'>
        <div className=''>
            <Link href='/'>
                <h2 className='text-xl font-bold uppercase tracking-tight'>Ebook</h2>
            </Link>
        </div>
        <div className='flex items-center gap-4'>
            <button className='h-10 rounded-md border border-primary-100 px-4 py-2 text-sm font-medium text-primary-100 transition-all hover:border-primary-100 hover:bg-primary-100 hover:text-white active:border-primary-100 active:text-white active:bg-primary-100'>Sign in</button>

            <button className='h-10 rounded-md bg-primary-100 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-50 active:bg-primary-50'>Sign in</button>
        </div>
    </nav>
  )
}

export default Navbar