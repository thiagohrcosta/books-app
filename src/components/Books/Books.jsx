
import { Box, Container } from '@chakra-ui/react';
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
    <Container margin={'50px auto'} maxW='container.lg' >
      <Box display="flex" justifyContent="center">
        {data.length < 1 ? (
          <p>Loading...</p>
          ) :
          (data.map((book) => {
            return (
              <BookCard
                key={book.id}
                title={book.data.book_name[0].text}
                year={book.data.year[0].text}
                author={book.data.author[0].text}
                cover={book.data.cover.url}
                description={book.data.description[0].text}
              />
            )
          }))}
        </Box>
    </Container>
  )
}
