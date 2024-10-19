import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {

  const response = await fetch(`${process.env.BASE_URL}/books`, {
    method: 'GET',
    cache:'no-cache'
  });
  // console.log(`url is ==== ${process.env.BASE_URL}/books`)

  if (!response.ok) {
    throw new Error('An error occured while fetching the books');
  }

  const data = await response.json();
  const books = data.books;




  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
