
const requests = {
  fetchTrending: 'https://api.themoviedb.org/3/trending/movie/day?api_key=e210177d339cffde80c7bde18b504e93&language=en-US',
  fetchPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=e210177d339cffde80c7bde18b504e93&language=en-US',
  fetchTopRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&language=en-US",
  fetchFamily: 'https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=10751',
  fetchComedyMovies: "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=35",
  fetchHorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=28',
  fetchRomanceMovies: "https://api.themoviedb.org/3/movie/top_rated?api_key=e210177d339cffde80c7bde18b504e93&with_genres=10749",
  fetchDocumentaries: "https://api.themoviedb.org/3/discover/movie?api_key=e210177d339cffde80c7bde18b504e93&with_genres=99",
}

export default requests