import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";
import Favorites from "./components/Favorites/Favorites";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL, {
        params: {
          q: query,
          maxResults: 40,
        },
      });

      const filteredBooks = response.data.items.filter((book) => !favorites.some((fav) => fav.id === book.id));

      setBooks(filteredBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addFavorite = (book) => {
    setFavorites([...favorites, book]);
    setBooks(books.filter((b) => b.id !== book.id));
  };

  const removeFavorite = (book) => {
    setFavorites(favorites.filter((fav) => fav.id !== book.id));
    setBooks([...books, book]);
  };

  return (
    <Container fluid className="mt-5">
      <SearchBar onSearch={handleSearch} />
      <Row>
        <Col md={8}>
          <BookList books={books} onAddFavorite={addFavorite} />
        </Col>
        <Col md={4}>
          <h3 className="text-center">Favorites</h3>
          <Favorites favorites={favorites} onRemoveFavorite={removeFavorite} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
