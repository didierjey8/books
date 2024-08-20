import { Card, Button } from "react-bootstrap";
import "./Book.css";

const Book = ({ title, authors, publisher, description, image, onAddFavorite }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Img variant="top" src={image || "placeholder.jpg"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Authors:</strong> {authors ? authors.join(", ") : "Unknown"}
          <br />
          <strong>Publisher:</strong> {publisher || "Unknown"}
          <br />
          <strong>Description:</strong> {description || "No description available."}
        </Card.Text>
        <Button variant="success" onClick={onAddFavorite}>
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
