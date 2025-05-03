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
        placeholder="Search Movies"
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="text-amber-600 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
