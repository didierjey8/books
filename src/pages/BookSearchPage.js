import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/BookList/BookList";

const BookSearchPage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL, {
        params: {
          q: query,
          maxResults: 40,
        },
      });
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="book-search-page">
      <SearchBar onSearch={handleSearch} />
      <SearchResults books={books} />
    </div>
  );
};

export default BookSearchPage;
