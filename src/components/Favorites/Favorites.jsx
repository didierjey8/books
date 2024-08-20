import { ListGroup, Button, Card, Image } from "react-bootstrap";
import "./Favorites.css";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <ListGroup variant="flush">
      {favorites.map((book) => (
        <Card className="mb-2 shadow-sm" key={book.id}>
          <Card.Body className="d-flex align-items-center">
            <Image
              src={book.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg"}
              alt={book.volumeInfo.title}
              className="img-thumbnail me-3"
              style={{ width: "50px" }}
            />
            <div className="flex-grow-1">
              <h5 className="mb-0">{book.volumeInfo.title}</h5>
            </div>
            <Button variant="danger" size="sm" onClick={() => onRemoveFavorite(book)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </ListGroup>
  );
};

export default Favorites;
