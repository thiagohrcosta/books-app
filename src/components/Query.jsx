
import { PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react'
import { useEffect, useState } from 'react'
import api from '../services/api';

export default function CustomQuery() {

  const [data, setData] = useState([]);

  // create function fetch data async
  const fetchData = async () => {
    const response = await api.get("https://bookapp.prismic.io/api/v2/documents/search?ref=YyDt4xEAACIASipZ&src=apibrowser#format=html");
    setData(response.data.results);
  }

  useEffect(() => {
    while (data.length === 0) {
      fetchData();
    }
    console.log(data);
  },[data])

   return (
    <>
    <h1>Galo</h1>
    </>
  )
}
