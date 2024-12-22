import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    console.log("Search query submitted:", query);
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <p>Searching for: {searchQuery}</p>
    </div>
  );
};

export default App;
