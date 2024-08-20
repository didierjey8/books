import Book from "../Book/Book";
import { Row, Col } from "react-bootstrap";
import "./BookList.css";

const BookList = ({ books, onAddFavorite }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col sm={12} md={6} lg={6} key={book.id}>
          <Book
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks?.thumbnail}
            onAddFavorite={() => onAddFavorite(book)}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
