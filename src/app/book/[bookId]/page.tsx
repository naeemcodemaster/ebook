import { Book } from '@/types'
import Image from 'next/image'
import React from 'react'
import DownloadButton from './components/DownloadButton';

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
    let book: Book | null = null;
    try {
        const response = await fetch(`${process.env.BASE_URL}/books/${params.bookId}`,{
            method:'GET',
            cache:'no-cache'
        });
        if (!response.ok) {
            throw new Error('Error fetching single book in if condition');
        }
        book = await response.json();

    } catch (error) {
        throw new Error('Error fetching single book')
    }

    if (!book) {
        throw new Error('Book not found')
    }


    return (
        <div className='container grid grid-cols-3 gap-10 py-2'>
            <div className='col-span-2 pr-16 text-primary-50'>
                <h2 className='mb-5 text-5xl font-bold leading-[1.1]'>{book.title}</h2>
                <span className='font-semibold'>by {book.author.name}</span>
                <p className='mt-5 text-lg leading-8'>{book.description}</p>
                <DownloadButton fileLink={book.file}/>
            </div>
            <div className='flex justify-end'>
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className='rounded-md border'
                    height={0}
                    width={0}
                    sizes='100vw'
                    style={{ width: 'auto', height: 'auto' }}

                />
              
            </div>
          
        </div>
    )
}

export default SingleBookPage