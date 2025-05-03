"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search Movies..."
        className="w-full h-14 rounded-md placeholder-gray-500 dark:placeholder-gray-200 outline-none bg-transparent flex-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="text-gray-500 disabled:text-gray-200 dark:text-gray-200 dark:disabled:text-gray-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
