import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BookCard({book}:{book:Book}) {
  return (
    <div className='flex gap-5 border p-5 shadow-md rounded-md'>
        <Image src={book.coverImage} alt={book.title} width={0} height={0} style={{width:'auto',height:'12rem',borderRadius:8}} sizes='100vw'/>
        <div>
            <h2 className='line-clamp-2 font-bold text-primary-50 text-balance'>{book.title}</h2>
            <p className='font-bold text-orange-800 mt-0'>{book.author.name}</p>
            <Link href={`/book/${book._id}`} className='border border-primary-100 inline-block py-1 px-2 rounded mt-2 text-sm font-medium hover:bg-primary-50 hover:text-white transition'>Read More...</Link>
        </div>

    </div>
  )
}

export default BookCard