"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { set } from "mongoose";

const AddToFav = ({
  movieId,
  title,
  image,
  overview,
  releaseDate,
  voteCount,
}) => {
  const [isFav, setIsFav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    if (isLoaded && isSignedIn && user) {
      setIsFav(user.publicMetadata?.favs?.includes(movieId));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isLoaded, isSignedIn, user, movieId]);

  const handleAddToFav = async () => {
    setIsLoading(true);
    if (!isSignedIn) {
      setIsLoading(false);
      router.push("/sign-in");
      return;
    }
    try {
      const res = await fetch("/api/user/fav", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId,
          title,
          image,
          overview,
          releaseDate,
          voteCount,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to add to favorites");
      }
      setIsFav(!isFav);
    } catch (error) {
      console.error("Error adding to favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToFav}
        className={`p-2 rounded ${
          isFav ? "bg-red-300 dark:bg-red-600" : "bg-gray-300 dark:bg-gray-600"
        }`}
        disabled={isLoading}
      >
        {isLoading
          ? "Loading..."
          : isFav
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </div>
  );
};

export default AddToFav;
