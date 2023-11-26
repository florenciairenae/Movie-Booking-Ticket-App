const apikey: string = '420629043b654f6c5b0f63051f37f4a7';
export const baseImagePath = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  };
  export const nowPlayingMovies: string = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`;
  export const upcomingMovies: string = `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`;
  export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1&with_genres=18&with_keywords=210024|287501&with_text_query=death`;
  export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/discover/movie?api_key=${apikey}&query=${keyword}`;
  };
  export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`;
  };
  export const movieCastDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`;
  };
  