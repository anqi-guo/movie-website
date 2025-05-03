"use client";

import { useParams } from "next/navigation";
import useFetch from "../../hooks/useFetch";
import Results from "../../../components/Results";

export default function GenrePage() {
  const { genre } = useParams();
  const { data, error } = useFetch({
    endpoint: genre === "trending" ? `/trending/all/week` : `/movie/top_rated`,
    query: `&language=en-US&page=1`,
  });

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return <Results results={data.results} />;
}
