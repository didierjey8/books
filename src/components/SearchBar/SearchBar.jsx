import { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Form className="search-bar mb-4" onSubmit={(e) => e.preventDefault()}>
      <InputGroup className="w-50 mx-auto">
        <FormControl
          placeholder="Search books by title, author, or description..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="form-control-lg"
        />
        <Button variant="primary" onClick={handleSearch} className="btn-lg">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
