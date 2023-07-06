import React, { useEffect, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery("");
    navigate(`/ad/${query}`);
  };
  useEffect(() => {});
  return (
    <Form inline onSubmit={handleSubmit}>
      <div className="d-flex ">
        <FormControl
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Cerca..."
          className="mr-sm-2"
        />
        <Button variant="outline-primary" type="submit">
          Cerca
        </Button>
      </div>
    </Form>
  );
}

export default SearchBar;
