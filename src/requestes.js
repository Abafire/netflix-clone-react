const APIKEY = "99f94dcac9f2e4205dfaa76a37d9c3c9";

const instance = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${instance}/trending/all/week?api_key=${APIKEY}&languge=en=US`,
  fetchNetflixOriginals: `${instance}/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `${instance}/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchActionMovies: `${instance}/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchComodyMovies: `${instance}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchHorrorMovies: `${instance}/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchRomanceMovies: `${instance}/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchDocmentereisMovies: `${instance}/discover/movie?api_key=${APIKEY}&with_genres=28`,
};
export default requests;
