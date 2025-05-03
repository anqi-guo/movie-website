export async function GET() {
  const API_KEY = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  return Response.json(data);
}
