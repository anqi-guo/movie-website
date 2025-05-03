"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import useFetch from "../../hooks/useFetch";
import AddToFav from "../../../components/AddToFav";

const Movie = () => {
  const { id } = useParams();
  const { data, error } = useFetch({ id });

  if (error)
    return (
      <div className="text-center mt-10">
        <p>Error: {error.message}</p>
        <Link href="/" className="hover:text-amber-600">
          Go back to home
        </Link>
      </div>
    );
  if (!data) return <p>Loading...</p>;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <img
          className="rounded-lg w-full md:w-96 h-56 object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            data.poster_path || data.backdrop_path
          }`}
          alt={data.title || data.name}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{data.title || data.name}</h2>
          <p className="text-lg mb-3">{data.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {data.release_date || data.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {data.vote_average} / 10
          </p>
          <AddToFav movie={data} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
