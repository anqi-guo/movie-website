import React from "react";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <img
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full sm:h-36 object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={result.title || result.name}
        />
        <div className="p-2">
          <p className="line-clamp-3 text-sm">{result.overview}</p>
          <h2 className="text-sm truncate my-2 font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-xs">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
