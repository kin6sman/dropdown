import React, { useState } from "react";

// This component creates a dropdown menu.
const Dropdown = ({ items }) => {

// The `isOpen` state variable indicates whether the dropdown menu is open.
const [isOpen, setIsOpen] = useState(false);

// The `selectedItem` state variable stores the currently selected item in the dropdown menu.
const [selectedItem, setSelectedItem] = useState(null);

// The `toggleDropdown` function toggles the open/closed state of the dropdown menu.
const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

// The `handleItemClick` function handles the click event for an item in the dropdown menu.
const handleItemClick = (item) => {
  setSelectedItem(item);
  setIsOpen(false);
};

// This returns the rendered markup for the dropdown menu.
return (
  <div className={`dropdown ${isOpen ? "open" : ""}`}>
    <button className="dropdown-button" onMouseEnter={toggleDropdown}>
      {selectedItem ? selectedItem.label : "Select an option"}
    </button>
    {isOpen && (
      <ul className="dropdown-list">
        {items.map((item) => (
          <li key={item.value} onClick={() => handleItemClick(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    )}
  </div>
);
};

// This exports the `Dropdown` component.
export default Dropdown;
