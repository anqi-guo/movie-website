"use client";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function useFetch({ endpoint, query = "" } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}&${query}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, [endpoint, query]);

  return { data, error };
}
