import React from 'react'

import BookCard from './BookCard';
import { Book } from '@/types';
const BookList = async() => {

  const response = await fetch(`${process.env.BASE_URL}/books`, {
    method: 'GET',
    cache:'no-cache'
  });

  if (!response.ok) {
    throw new Error('An error occured while fetching the books');
  }

  const data = await response.json();
  const books = data.books;

  console.log("list",books);
  return (
    <div className='container grid grid-cols-1 gap-8 md:grid-cols-3 mb-10'>
      {
        books?.map((book:Book) => (
          <BookCard key={book._id} book={book}/>
        ))
      }
    </div>
  )
}

export default BookList