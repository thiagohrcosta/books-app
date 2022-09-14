
import { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../contexts/BookContext';
import BookCard from '../BookCard';

export default function Books() {
  const { books } = useContext(BookContext);

  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    setData(books);
  }

  useEffect(() => {
    fetchOrder();
    console.log(data)
  }, [books])



   return (
    <>
      {data.length < 1 ? (
        <p>Loading...</p>
        ) :
        (data.map((book) => {
          return (
            <BookCard
              key={book.id}
              title={book.data.book_name[0].text}
              author={book.data.author[0].text}
              cover={book.data.cover.url}
            />
          )
        }))}
    </>
  )
}
