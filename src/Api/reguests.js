const Requests = {
  fetchTrending: `trending/all/week?api_key=e99375d6ca88c9406621028a59f9ddfe&languages=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=e99375d6ca88c9406621028a59f9ddfe&with_network=213`,
  fetchTopRated: `movie/top_rated?api_key=e99375d6ca88c9406621028a59f9ddfe&languages=en-US`,
  fetchActionMovies: `discover/movie?api_key=e99375d6ca88c9406621028a59f9ddfe&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=e99375d6ca88c9406621028a59f9ddfe&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=e99375d6ca88c9406621028a59f9ddfe&with_genres=9648`,
  fetchRomanceMovies: `discover/movie?api_key=e99375d6ca88c9406621028a59f9ddfe&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=e99375d6ca88c9406621028a59f9ddfe&with_genres=99`,
};
export default Requests;
