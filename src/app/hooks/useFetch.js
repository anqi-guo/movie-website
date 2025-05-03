"use client";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function useFetch({ genre = "trending", id = null } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const endpoint = id
    ? `/movie/${id}`
    : genre === "rated"
    ? "/movie/top_rated"
    : "/trending/all/week";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}${
        id ? "" : "&language=en-US&page=1"
      }`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, [endpoint, id]);

  return { data, error };
}
