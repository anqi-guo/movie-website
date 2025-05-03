import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-2 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-3">
            About IMDB Clone
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to IMDB Clone! The goal of this project is to provide a
              similar user experience to IMDB, allowing users to browse and
              search for movies, TV shows, and other content.
            </p>
            <p>
              On IMDB Clone, you&apos;ll find a wide range of movies and TV
              shows, complete with detailed information, ratings, and reviews.
              You can also create an account to save your favorite content and
              receive personalized recommendations.
            </p>
            <p>
              This website is built using Next.js,{" "}
              <a
                href="https://go.clerk.com/fgJHKlt"
                target="_blank"
                className="text-teal-500 hover:underline"
              >
                Clerk
              </a>{" "}
              for authentication, and{" "}
              <a
                href="https://cloud.mongodb.com/"
                target="_blank"
                className="text-teal-500 hover:underline"
              >
                MongoDB
              </a>{" "}
              for data storage.
            </p>
            <p>
              We encourage you to explore the site and discover new movies and
              TV shows. If you have any questions or feedback, please feel free
              to reach out to us. We hope you enjoy your experience on IMDB
              Clone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
