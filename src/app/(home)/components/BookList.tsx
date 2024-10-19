import React from 'react'
import {Book} from '@/types/index'
import BookCard from './BookCard';
function BookList({books}:{books:Book[]}) {
  console.log("list",books);
  return (
    <div className='container grid grid-cols-1 gap-8 md:grid-cols-3'>
      {
        books?.map((book) => (
          <BookCard key={book._id} book={book}/>
        ))
      }
    </div>
  )
}

export default BookList