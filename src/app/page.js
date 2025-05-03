"use client";
import { useEffect, useState } from "react";
import Results from "../components/Results";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div>
      <Results results={data?.results} />
    </div>
  );
}
