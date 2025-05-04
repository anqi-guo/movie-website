# IMDb Clone

This is a web application built with **Next.js** that replicates IMDb functionality. It fetches real-time movie data from the **TMDB API**, supports user authentication with **Clerk**, and stores user-specific data such as favorites in **MongoDB**. The app includes light/dark mode, search functionality, and a responsive interface.

## Key Features

- User authentication via **Clerk**.
- Fetches the latest movie data from the **TMDB API**.
- Allows users to browse movies by **Trending** or **Top Rated**.
- Users can save their favorite movies and view them in a dedicated section.
- **Night Mode** toggle using `next-themes` for a light/dark theme experience.
- **Search** for movies by title
- Responsive UI with modern styling via **Tailwind CSS**.

## Tech Stack

- **Next.js**: Handles both frontend and backend with server-rendered React and API routes.
- **TMDB API**: Provides movie data for the application.
- **Clerk**: Manages user authentication and metadata like favorites.
- **MongoDB (with Mongoose)**: Stores user data and favorites in a flexible NoSQL database.
- **Inngest**: Runs background jobs and handles async workflows like delayed tasks.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **next-themes**: For handling light and dark modes across the site.

## Deployment

The project is deployed on Vercel. You can access the live website [here](https://movie-website-nine-beta.vercel.app)

## TODO

[ ] **Switch to Server-side Fetching (SSR)**  
 Currently, movie data from TMDB is fetched on the client side. This can lead to slower initial loads and SEO limitations. Moving to server-side fetching (e.g., `getServerSideProps`) will:

- Improve perceived performance
- Enhance SEO (search engine indexing of movie data)
- Reduce client bandwidth and API exposure

[ ] **Redesign Layout & Add Features**  
 The homepage and movie details page currently use a minimal layout. Planned improvements:

- Visual enhancements for better UI/UX
- More information on the movie detail page (e.g., cast, trailers, similar titles)
- User interactions like reviews, watchlists, or ratings
