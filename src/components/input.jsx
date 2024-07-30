import React from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");

  // Реакт дахиж рендэр хийж харуулахын тулд State ашиглана.
  // State бол Хувьсагч
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        className="border-2 border-gray-950 rounded-md"
        onChange={handleChange}
      />
      <p>Search Value: {searchValue}</p>
    </div>
  );
};

export default Input;
