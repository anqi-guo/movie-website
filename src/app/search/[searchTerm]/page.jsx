"use client";

import { useParams } from "next/navigation";
import React from "react";
import useFetch from "../../hooks/useFetch";
import Results from "../../../components/Results";

const page = () => {
  const { searchTerm } = useParams();
  const { data, error } = useFetch({
    endpoint: `/search/movie`,
    query: `&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
  });

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
};

export default page;
