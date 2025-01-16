import React, { useState, useEffect } from "react";

const SearchBar = ({ query, setQuery }) => {
  const handleSearch = () => {
    // Simulate search behavior
    console.log("Searching for:", query);
  };

  useEffect(() => {
    // Reset query when component is mounted
    setQuery("");
  }, [setQuery]);

  return (
    <div className="mt-6 flex items-center w-2/3 md:w-1\2">
      <input
        type="text"
        placeholder="Search for restaurants, cuisines, or dishes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-red-600 text-white rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
