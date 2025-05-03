"use client";

import { useParams } from "next/navigation";
import MovieFetcher from "../../../components/MovieFetcher";

export default function GenrePage() {
  const { genre } = useParams();
  return <MovieFetcher genre={genre} />;
}
