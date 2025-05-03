"use client";
import { useEffect, useState } from "react";
import Results from "./Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function MovieFetcher({ genre = "trending" }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const endpoint =
      genre === "rated" ? "/movie/top_rated" : "/trending/all/week";

    fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        console.error(err);
      });
  }, [genre]);

  return <Results results={data?.results} />;
}
