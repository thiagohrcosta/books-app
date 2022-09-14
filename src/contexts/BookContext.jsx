import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../services/api";

export const BookContext =  createContext();

export default function BookContextProvider({children}) {
  const [books, setBooks] = useState([]);

  const fetchOrder = async () => {
    const response = await api.get("https://bookapp.prismic.io/api/v2/documents/search?ref=YyImghEAACUAT8eb&src=apibrowser#format=html");
    setBooks(response.data.results);
  }

  useEffect(() => {
    fetchOrder();
    console.log(books);
  }, [])

  return (
    <BookContext.Provider value={{books}}>
      {children}
    </BookContext.Provider>
  )
}
