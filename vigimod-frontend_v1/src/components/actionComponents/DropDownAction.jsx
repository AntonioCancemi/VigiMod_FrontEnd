import React, { useState, useRef } from "react";
import { Form, FormControl, Dropdown, ListGroup } from "react-bootstrap";

const DropDownAction = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    dropdownRef.current.focus();
    dropdownRef.current.click();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        ref={dropdownRef}
        variant="secondary"
        id="dropdown-basic"
      >
        {selectedOption ? selectedOption : "REJECT"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Form>
          <FormControl
            className="nofocus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form>
        <ListGroup>
          {filteredOptions.map((option, index) => (
            <ListGroup.Item
              className="border-0"
              key={index}
              action
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownAction;
