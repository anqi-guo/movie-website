"use client";
import useFetch from "./hooks/useFetch";
import Results from "../components/Results";

export default function Home() {
  const { data, error } = useFetch({
    endpoint: `/trending/all/week`,
    query: `&language=en-US&page=1`,
  });

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return <Results results={data.results} />;
}
