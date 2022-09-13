
import { PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react'
import { useContext, useEffect, useState } from 'react'
import { BookContext } from '../contexts/BookContext';
import api from '../services/api';

export default function CustomQuery() {
  const { books } = useContext(BookContext);

  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    setData(books);
  }

  useEffect(() => {
    fetchOrder();
    console.log(data[0]);
  }, [books])



   return (
    <>
      {data.length < 1 ? (
        <p>Loading...</p>
        ) :
        (data[0].data.author[0].text)}
    </>
  )
}
