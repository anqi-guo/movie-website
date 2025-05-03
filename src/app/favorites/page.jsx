"use client";

import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Results from "../../components/Results";
import { useUser } from "@clerk/nextjs";

const page = () => {
  const [results, setResults] = useState([]);
  const { isSignedIn, user, isLoaded } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user/getFav", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.ok) {
          const data = await res.json();
          setResults(data.favs);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    if (isLoaded && isSignedIn && user) {
      fetchData();
    }
  }, [results, isLoaded, isSignedIn, user]);
  console.log("Results:", results);
  return (
    <div>
      <Results
        results={results.map((result) => ({
          ...result,
          id: result.movieId,
          title: result.title,
          backdrop_path: result.image,
          overview: result.description,
          first_air_date: result.dateReleased.substring(0, 10),
          vote_count: result.rating,
        }))}
      />
    </div>
  );
};

export default page;
