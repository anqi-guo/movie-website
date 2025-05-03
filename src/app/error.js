"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong! Please try again later.</h1>
      <button className="hover:bg-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
