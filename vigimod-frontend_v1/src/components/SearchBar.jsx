import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { setAdId } from "../redux/actions/searchbar.actions";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adId = useSelector((state) => state.search.ad.adId);
  const [query, setQuery] = useState();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAdId(query));
    setQuery("");
    navigate(`/ad`);
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
